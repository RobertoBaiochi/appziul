import { Request, Response } from "express";
import { CreateUserService } from "../../service/users/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const createUserService = new CreateUserService();

        try {
            const user = await createUserService.execute({
                name,
                email,
                password,
            });
            return res.status(200).json(user);
        } catch (error) {
            if (error.status === 422) {
                return res.status(422).json({ error: error.message });
            }

            return res.status(500).json({ error: "Internal Error" });
        }
    }
}

export { CreateUserController };
