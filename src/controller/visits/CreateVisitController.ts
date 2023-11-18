import { Request, Response } from "express";
import { CreateVisitService } from "../../service/visits/CreateVisitService";

class CreateVisitController {
    async handle(req: Request, res: Response) {
        const { description, budget, scheduled_date, client_id } = req.body;

        const createVisitService = new CreateVisitService();

        const visit = await createVisitService.execute({
            description,
            budget,
            scheduled_date,
            client_id,
        });

        return res.json(visit);
    }
}

export { CreateVisitController };
