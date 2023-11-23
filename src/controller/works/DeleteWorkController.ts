import { Request, Response } from "express";
import { DeleteWorkService } from "../../service/works/DeleteWorkService";

class DeleteWorkController {
    async handle(req: Request, res: Response) {
        const id = req.query.id as string;

        console.log(id);

        const deleteWorkService = new DeleteWorkService();

        await deleteWorkService.execute({ id });

        return res.status(200).json({ message: "Deletado com sucesso" });
    }
}

export { DeleteWorkController };
