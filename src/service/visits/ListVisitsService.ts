import prismaClient from "../../prisma";

class ListVisitsService {
    async execute() {
        const listVisits = await prismaClient.visit.findMany({
            where: {
                approved: false,
            },
            select: {
                id: true,
                scheduled_date: true,
                approved: true,
                description: true,
                budget: true,
                client_id: true,
                client: true,
            },
        });

        return listVisits;
    }
}

export { ListVisitsService };
