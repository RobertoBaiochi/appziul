import { Request, Response } from "express";
import { CreateClientService } from "../../service/clients/CreateClientService";

class CreateClientController {
    async handle(req: Request, res: Response) {
        const { name_client, address, phone } = req.body;

        const createClientService = new CreateClientService();

        const client = await createClientService.execute({
            name_client,
            address,
            phone,
        });

        return res.json(client);
    }
}

export { CreateClientController };
