import { Request, Response } from "express";
import { CreateVisitService } from "../../service/visits/CreateVisitService";

class CreateVisitController {
    async handle(req: Request, res: Response) {
        const { description, budget, scheduled_date, client_id } = req.body;

        const createVisitService = new CreateVisitService();

        try {
            const visit = await createVisitService.execute({
                description,
                budget,
                scheduled_date,
                client_id,
            });

            return res.status(200).json(visit);
        } catch (error) {
            if (error.status === 400) {
                return res.status(400).json({ error: error.message });
            }

            return res.status(500).json({ error: "Internal Error" });
        }
    }
}

export { CreateVisitController };
