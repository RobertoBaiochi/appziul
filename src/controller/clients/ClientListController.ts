import { Request, Response } from "express";
import { ClientListService } from "../../service/clients/ClientListService";

class ClientListController {
    async handle(req: Request, res: Response) {
        const clientListService = new ClientListService();

        const clients = await clientListService.execute();

        res.json(clients);
    }
}

export { ClientListController };
