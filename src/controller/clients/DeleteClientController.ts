import { Request, Response } from "express";
import { DeleteClientService } from "../../service/clients/DeleteClientService";

class DeleteClientController {
    async handle(req: Request, res: Response) {
        const id = req.query.id as string;
        console.log(id);

        const deleteClientService = new DeleteClientService();

        await deleteClientService.execute(id);

        return res
            .status(200)
            .send({ message: "Usuário deletado com sucesso" });
    }
}

export { DeleteClientController };
