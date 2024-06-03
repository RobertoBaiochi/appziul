import prismaClient from "../../prisma";
import createError from "http-errors";

class UpdateApproveVisitService {
    async execute(id: string) {
        const approved = await prismaClient.visit.update({
            where: {
                id: id,
            },
            data: {
                approved: true,
            },
        });

        if (!approved) {
            throw createError(404, "A visita não existe");
        }

        return approved;
    }
}

export { UpdateApproveVisitService };
