import prismaClient from "../../prisma";

class DeleteVisitService {
    async execute({ id }) {
        const deleteVisit = await prismaClient.visit.delete({
            where: {
                id: id,
            },
        });

        return deleteVisit;
    }
}

export { DeleteVisitService };
