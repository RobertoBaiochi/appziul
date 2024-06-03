import prismaClient from "../../prisma";
import createError from "http-errors";
/*
    [x] retornar um trabalho através do ID
*/

class ListWorkByIdService {
    async execute(id: string) {
        const work = await prismaClient.work.findUnique({
            where: {
                id: id,
            },
            select: {
                id: true,
                description: true,
                budget: true,
                scheduled_date: true,
                status: true,
                employee: true,
                client: true,
            },
        });

        if (!work) {
            throw createError(404, "O trabalho não existe");
        }

        return work;
    }
}

export { ListWorkByIdService };
