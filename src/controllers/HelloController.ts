class HelloController {
    async index (req: any, res: { json: (arg0: { hello: string; }) => void; }) {
        res.json({ hello: "Oie... FIlha da Puta" });
    }
}

export default new HelloController();