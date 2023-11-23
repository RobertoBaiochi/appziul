import { Request, Response } from "express";
import { UpdateWorkService } from "../../service/works/UpdateWorkService";

class UpdateWorkController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { description, budget, scheduled_date } = req.body;

        const updateWorkService = new UpdateWorkService();

        await updateWorkService.execute({
            id,
            description,
            budget,
            scheduled_date,
        });

        return res
            .status(200)
            .send("Dados do Trabalho atualizados com Sucesso");
    }
}

export { UpdateWorkController };
