import { Request, Response } from "express";
import { ListWorksDoneService } from "../../service/works/ListWorksDoneService";

class ListWorksDoneController {
    async handle(req: Request, res: Response) {
        const listWorksDoneService = new ListWorksDoneService();

        const worksDone = await listWorksDoneService.execute();

        return res.json(worksDone);
    }
}

export { ListWorksDoneController };
