import { Request, Response } from "express";
import { UpdateClientService } from "../../service/clients/UpdateClientService";

class UpdateClientController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { name_client, address, phone } = req.body;

        const updateClientService = new UpdateClientService();

        updateClientService.execute({
            id,
            name_client,
            address,
            phone,
        });

        return res
            .status(200)
            .send({ message: "Usuário atualizado com sucesso" });
    }
}

export { UpdateClientController };
