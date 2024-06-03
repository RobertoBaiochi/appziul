import { Request, Response } from "express";
import { UpdateApproveVisitService } from "../../service/visits/UpdateApproveVisitService";

class UpdateApproveVisitController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const updateApproveVisitService = new UpdateApproveVisitService();

        try {
            await updateApproveVisitService.execute(id);
            return res.status(200).send({ message: "Orçamento aprovado!" });
        } catch (error) {
            if (error.status === 404) {
                return res.status(404).json({ error: error.message });
            }

            return res.status(500).json({ error: "Internal Error" });
        }
    }
}

export { UpdateApproveVisitController };
