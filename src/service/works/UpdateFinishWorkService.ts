import prismaClient from "../../prisma";
import createError from "http-errors";

class UpdateFinishWorkService {
    async execute(id: string) {
        const finishedWork = await prismaClient.work.update({
            where: {
                id,
            },
            data: {
                status: true,
            },
        });

        if (!finishedWork) {
            throw createError(404, "O trabalho não existe");
        }

        return finishedWork;
    }
}

export { UpdateFinishWorkService };
