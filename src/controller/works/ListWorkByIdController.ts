import { Request, Response } from "express";
import { ListWorkByIdService } from "../../service/works/ListWorkByIdService";

class ListWorkByIdController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const listWorkByIdService = new ListWorkByIdService();

        const work = await listWorkByIdService.execute(id);

        return res.json(work);
    }
}

export { ListWorkByIdController };
