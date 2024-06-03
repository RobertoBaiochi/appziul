import { Request, Response } from "express";
import { UpdateWorkService } from "../../service/works/UpdateWorkService";

class UpdateWorkController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { description, budget, scheduled_date } = req.body;

        const updateWorkService = new UpdateWorkService();

        try {
            await updateWorkService.execute({
                id,
                description,
                budget,
                scheduled_date,
            });

            return res
                .status(200)
                .send("Dados do Trabalho atualizados com Sucesso");
        } catch (error) {
            if (error.status === 400) {
                return res.status(400).json({ error: error.message });
            }

            if (error.status === 404) {
                return res.status(404).json({ error: error.message });
            }

            return res.status(500).json({ error: "Internal Error" });
        }
    }
}

export { UpdateWorkController };
