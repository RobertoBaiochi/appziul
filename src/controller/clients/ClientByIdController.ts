import { Request, Response } from "express";
import { ClientByIdService } from "../../service/clients/ClientByIdService";

class ClientByIdController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const clientByIdService = new ClientByIdService();

        const client = await clientByIdService.execute(id);

        return res.json(client);
    }
}

export { ClientByIdController };
