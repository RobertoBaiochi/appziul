import { Request, Response } from "express";
import { UpdateVisitService } from "../../service/visits/UpdateVisitService";

class UpdateVisitController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { scheduled_date, description, budget } = req.body;

        const updateVisitService = new UpdateVisitService();

        try {
            const newVisit = await updateVisitService.execute({
                id,
                scheduled_date,
                description,
                budget,
            });

            return res.status(200).json(newVisit);
        } catch (error) {
            if (error.status === 400) {
                return res.status(400).json({ error: error.message });
            }

            if (error.status === 404) {
                return res.status(404).json({ error: error.message });
            }

            return res.status(500).json({ error: "Internal Error" });
        }
    }
}

export { UpdateVisitController };
