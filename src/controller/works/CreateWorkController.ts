import { Response, Request } from "express";
import { CreateWorkService } from "../../service/works/CreateWorkService";

class CreateWorkController {
    async handle(req: Request, res: Response) {
        const { id, scheduled_date } = req.body;

        const createWorkService = new CreateWorkService();

        const work = await createWorkService.execute({ id, scheduled_date });

        return res.json(work);
    }
}

export { CreateWorkController };
