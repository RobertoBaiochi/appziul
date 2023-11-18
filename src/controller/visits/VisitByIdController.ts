import { Request, Response } from "express";
import { VisitByIdService } from "../../service/visits/VisitByIdService";

class VisitByIdController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const visitByIdService = new VisitByIdService();

        const visit = await visitByIdService.execute(id);

        return res.json(visit);
    }
}

export { VisitByIdController };
