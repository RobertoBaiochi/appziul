import { Request, Response } from "express";
import { ListWorksService } from "../../service/works/ListWorksService";

class ListWorksController {
    async handle(req: Request, res: Response) {
        const listWorksService = new ListWorksService();

        const list = await listWorksService.execute();

        return res.json(list);
    }
}

export { ListWorksController };
