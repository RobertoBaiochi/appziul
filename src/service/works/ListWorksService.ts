import prismaClient from "../../prisma";

class ListWorksService {
    async execute() {
        const workList = await prismaClient.work.findMany({
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

        return workList;
    }
}

export { ListWorksService };
