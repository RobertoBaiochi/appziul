import { Request, Response } from "express";
import { AuthUserService } from "../../service/users/AuthUserService";

class AuthUserController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        const authUserService = new AuthUserService();

        try {
            const auth = await authUserService.execute({ email, password });

            return res.status(200).json(auth);
        } catch (error) {
            if (error.status === 422) {
                return res.status(422).json({ error: error.message });
            }

            return res.status(500).json({ error: "Internal Error" });
        }
    }
}

export { AuthUserController };
