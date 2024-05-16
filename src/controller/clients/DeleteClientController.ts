import { Request, Response } from "express";
import { DeleteClientService } from "../../service/clients/DeleteClientService";

class DeleteClientController {
    async handle(req: Request, res: Response) {
        const id = req.params.id as string;

        const deleteClientService = new DeleteClientService();

        try {
            await deleteClientService.execute(id);

            return res
                .status(200)
                .send({ message: "Usuário deletado com sucesso" });
        } catch (error) {
            if (error.status === 404) {
                return res.status(404).json({ error: error.message });
            }

            return res.status(500).json({ error: "Internal Error" });
        }
    }
}

export { DeleteClientController };
