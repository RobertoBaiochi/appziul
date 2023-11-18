import { Request, Response } from "express";
import { ListVisitsService } from "../../service/visits/ListVisitsService";

class ListVisitsController {
    async handle(req: Request, res: Response) {
        const listVisitsService = new ListVisitsService();

        const listVisits = await listVisitsService.execute();

        return res.json(listVisits);
    }
}

export { ListVisitsController };
