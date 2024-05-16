import { Request, Response } from "express";
import { UpdateClientService } from "../../service/clients/UpdateClientService";

class UpdateClientController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { name_client, address, phone } = req.body;

        const updateClientService = new UpdateClientService();

        try {
            const newClient = await updateClientService.execute({
                id,
                name_client,
                address,
                phone,
            });

            return res.status(200).json(newClient);
        } catch (error) {
            if (error.status === 404) {
                return res.status(404).json({ error: error.message });
            }

            if (error.status === 400) {
                return res.status(400).json({ error: error.message });
            }

            return res.status(500).json({ error: "Internal Error" });
        }
    }
}

export { UpdateClientController };
