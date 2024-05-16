import { Request, Response } from "express";
import { CreateClientService } from "../../service/clients/CreateClientService";

class CreateClientController {
    async handle(req: Request, res: Response) {
        const { name_client, address, phone } = req.body;

        const createClientService = new CreateClientService();
        try {
            const client = await createClientService.execute({
                name_client,
                address,
                phone,
            });

            return res.status(200).json(client);
        } catch (error) {
            if (error.status === 400) {
                return res.status(400).json({ error: error.message });
            }

            if (error.status === 422) {
                return res.status(422).json({ error: error.message });
            }

            return res.status(500).json({ error: "Internal Error" });
        }
    }
}

export { CreateClientController };
