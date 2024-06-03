import { Response, Request } from "express";
import { CreateWorkService } from "../../service/works/CreateWorkService";

class CreateWorkController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { scheduled_date } = req.body;

        const createWorkService = new CreateWorkService();

        try {
            const work = await createWorkService.execute({
                id,
                scheduled_date,
            });

            return res.json(work);
        } catch (error) {
            if (error.status === 400) {
                return res.status(400).json({ error: error.message });
            }

            if (error.status === 404) {
                return res.status(404).json({ error: error.messsage });
            }

            return res.status(500).json({ error: "Internal Error" });
        }
    }
}

export { CreateWorkController };
