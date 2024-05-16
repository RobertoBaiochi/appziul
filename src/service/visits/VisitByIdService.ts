import prismaClient from "../../prisma";
import createError from "http-errors";

class VisitByIdService {
    async execute(id: string) {
        const visit = await prismaClient.visit.findUnique({
            where: {
                id: id,
            },
            select: {
                id: true,
                scheduled_date: true,
                description: true,
                budget: true,
                approved: true,
                client: true,
            },
        });

        if (!visit) {
            throw createError(404, "A visita não existe");
        }

        return visit;
    }
}

export { VisitByIdService };
