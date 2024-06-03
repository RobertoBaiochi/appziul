import { Request, Response } from "express";
import { ListWorkByIdService } from "../../service/works/ListWorkByIdService";

class ListWorkByIdController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const listWorkByIdService = new ListWorkByIdService();

        try {
            const work = await listWorkByIdService.execute(id);

            return res.json(work);
        } catch (error) {
            if (error.status === 404) {
                return res.status(404).json({ error: error.message });
            }

            return res.status(500).json({ error: "Internal Error" });
        }
    }
}

export { ListWorkByIdController };
