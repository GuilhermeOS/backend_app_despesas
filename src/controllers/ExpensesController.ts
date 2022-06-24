import User from "../models/User";
import Expense from "../models/Expense";

class ExpensesController {
    async index (req, res) {
        try {
            const { user_id } = req.params;

            const user = await User.findById(user_id);

            if (!user) {
                return res.status(404).json();
            }

            const expenses = await Expense.find({
                userId: user_id
            });

            return res.json(expenses);

        } catch (error) {
            console.error(error);

            return res.status(500).json({ error: "Internal server error." })
        }
    };
    
    /* async show (req, res) {
        try {
            const { id } = req.params;

            const user = await User.findById(id);

            if (!user) {
                return res.satus(404).json();
            }

            return res.json(user);

        } catch (error) {
            console.error(error);

            return res.status(500).json({ error: "Internal server error." })
        }
        
    }; */

    async create (req, res) {
        try {
            const { user_id } = req.params;
            const { 
                title, 
                typeTransaction, 
                value, 
                datePayment, 
                paidOut 
            } = req.body;

            const user = await User.findById(user_id);

            if (!user) {
                return res.status(404).json();
            }

            const newExpanse = await Expense.create({
                title, 
                typeTransaction, 
                value, 
                userId: user_id,
                datePayment, 
                paidOut 
            });

            return res.status(201).json(newExpanse);

        } catch (error) {
            console.error(error);

            return res.status(500).json({ error: "Internal server error." })
        }
    };

    /* async update (req, res) {
        try {
            const { id } = req.params;
            const { email, password } = req.body;

            const user = await User.findById(id);

            if (!user) {
                return res.status(404).json();
            }

            const encryptedPassword = await createPasswordHash(password);

            await user.updateOne({ email, password: encryptedPassword })

            return res.status(200).json();

        } catch (error) {
            console.error(error);

            return res.status(500).json({ error: "Internal server error." })
        }
    }; */

    async destroy (req, res) {
        try {
            const { user_id, id } = req.params;

            const user = await User.findById(user_id);

            if (!user) {
                return res.status(404).json();
            }

            const expanse = await Expense.findOne({
                userId: user_id,
                id
            });

            if (!expanse) {
                return res.status(404).json();
            }
            
            await expanse.deleteOne();

            return res.status(200).json();

        } catch (error) {
            console.error(error);

            return res.status(500).json({ error: "Internal server error." })
        }
    };
};

export default new ExpensesController();