import { Request, Response } from "express";
import { DeleteVisitService } from "../../service/visits/DeleteVisitService";

class DeleteVisitController {
    async handle(req: Request, res: Response) {
        const id = req.query.id as string;

        const deleteVisitService = new DeleteVisitService();

        await deleteVisitService.execute({ id });

        return res
            .status(200)
            .send({ message: "Visita deletada com sucesso." });
    }
}

export { DeleteVisitController };
