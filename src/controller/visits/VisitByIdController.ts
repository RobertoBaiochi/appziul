import { Request, Response } from "express";
import { VisitByIdService } from "../../service/visits/VisitByIdService";

class VisitByIdController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const visitByIdService = new VisitByIdService();

        try {
            const visit = await visitByIdService.execute(id);

            return res.status(200).json(visit);
        } catch (error) {
            if (error.status === 400) {
                return res.status(400).json({ error: error.message });
            }
        }
    }
}

export { VisitByIdController };
