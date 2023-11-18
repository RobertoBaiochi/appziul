import prismaClient from "../../prisma";

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

        return approved;
    }
}

export { UpdateApproveVisitService };
