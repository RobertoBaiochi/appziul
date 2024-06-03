import { Request, Response } from "express";
import { UpdateFinishWorkService } from "../../service/works/UpdateFinishWorkService";

class UpdateFinishWorkController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const updateFinishWorkService = new UpdateFinishWorkService();

        try {
            await updateFinishWorkService.execute(id);

            return res.status(200).send("Trabalho Concluído.");
        } catch (error) {
            if (error.status === 404) {
                return res.status(404).json({ error: error.message });
            }

            return res.status(500).json({ error: "Internal Error" });
        }
    }
}

export { UpdateFinishWorkController };
