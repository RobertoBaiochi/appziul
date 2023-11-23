import prismaClient from "../../prisma";

class ListWorksService {
    async execute() {
        const workList = await prismaClient.work.findMany({
            where: {
                status: false,
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

        return workList;
    }
}

export { ListWorksService };
