import prismaClient from "../../prisma";
import createError from "http-errors";

class DeleteVisitService {
    async execute({ id }) {
        const deleteVisit = await prismaClient.visit.delete({
            where: {
                id: id,
            },
        });

        if (!deleteVisit) {
            throw createError(404, "Visita não encontrada");
        }

        return deleteVisit;
    }
}

export { DeleteVisitService };
