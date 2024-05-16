import { Request, Response } from "express";
import { DeleteVisitService } from "../../service/visits/DeleteVisitService";

class DeleteVisitController {
    async handle(req: Request, res: Response) {
        const id = req.query.id as string;

        const deleteVisitService = new DeleteVisitService();

        try {
            await deleteVisitService.execute({ id });

            return res
                .status(200)
                .send({ message: "Visita deletada com sucesso." });
        } catch (error) {
            if (error.status === 404) {
                return res.status(404).json({ error: error.message });
            }

            return res.status(500).json({ error: "Internal Error" });
        }
    }
}

export { DeleteVisitController };
