import { Request, Response } from "express";
import { UpdateApproveVisitService } from "../../service/works/UpdateApproveVisitService";

class UpdateApproveVisitController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const updateApproveVisitService = new UpdateApproveVisitService();

        await updateApproveVisitService.execute(id);

        return res.status(200).send({ message: "Orçamento aprovado!" });
    }
}

export { UpdateApproveVisitController };
