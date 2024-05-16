import { Request, Response } from "express";
import { DetailsUserService } from "../../service/users/DetailsUserService";

class DetailsUserController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        const detailsUserService = new DetailsUserService();

        try {
            const user = await detailsUserService.execute(user_id);

            return res.status(200).json(user);
        } catch (error) {
            if (error.status === 401) {
                return res.status(401).json({ error: error.message });
            }

            return res.status(500).json({ error: "Internal Error" });
        }
    }
}

export { DetailsUserController };
