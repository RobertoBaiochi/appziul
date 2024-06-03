import { Request, Response } from "express";
import { DeleteWorkService } from "../../service/works/DeleteWorkService";

class DeleteWorkController {
    async handle(req: Request, res: Response) {
        const id = req.params;

        const deleteWorkService = new DeleteWorkService();

        try {
            await deleteWorkService.execute({ id });

            return res.status(200).json({ message: "Deletado com sucesso" });
        } catch (error) {
            if (error.status === 404) {
                return res.status(404).json({ error: error.message });
            }

            return res.status(500).json({ error: "Internal Error" });
        }
    }
}

export { DeleteWorkController };
