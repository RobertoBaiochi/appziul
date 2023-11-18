import prismaClient from "../../prisma";

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

        return visit;
    }
}

export { VisitByIdService };
