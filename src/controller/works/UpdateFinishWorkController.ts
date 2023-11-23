import { Request, Response } from "express";
import { UpdateFinishWorkService } from "../../service/works/UpdateFinishWorkService";

class UpdateFinishWorkController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const updateFinishWorkService = new UpdateFinishWorkService();

        await updateFinishWorkService.execute(id);

        return res.status(200).send("Trabalho Concluído.");
    }
}

export { UpdateFinishWorkController };
