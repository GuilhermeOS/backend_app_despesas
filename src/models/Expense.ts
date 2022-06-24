import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        typeTransaction: {
            type: String,
            enum: ["Revenue", "Expense"],
            default: "Expense",
            required: true
        },
        value: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true
        },
        datePayment: {
            type: Date,
            required: true
        },
        paidOut: {
            type: String,
            enum: ["Paid Out", "Unpaid"],
            default: "Unpaid",
            required: true
        },
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Expense", expenseSchema);