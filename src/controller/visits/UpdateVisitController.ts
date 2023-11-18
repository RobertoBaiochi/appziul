import { Request, Response } from "express";
import { UpdateVisitService } from "../../service/visits/UpdateVisitService";

class UpdateVisitController {
    async handle(req: Request, res: Response) {
        const { id, scheduled_date, description, budget } = req.body;

        const updateVisitService = new UpdateVisitService();

        await updateVisitService.execute({
            id,
            scheduled_date,
            description,
            budget,
        });

        return res
            .status(200)
            .send({ message: "Visita atualizada com sucesso." });
    }
}

export { UpdateVisitController };
