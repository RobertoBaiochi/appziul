import prismaClient from "../../prisma";
import createError from "http-errors";

class DeleteWorkService {
    async execute({ id }) {
        const deleteWork = await prismaClient.work.delete({
            where: {
                id,
            },
        });

        if (!deleteWork) {
            throw createError(404, "O trabalho não existe");
        }

        return deleteWork;
    }
}

export { DeleteWorkService };
