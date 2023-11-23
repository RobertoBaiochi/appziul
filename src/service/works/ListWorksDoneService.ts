import prismaClient from "../../prisma";

class ListWorksDoneService {
    async execute() {
        const list = await prismaClient.work.findMany({
            where: {
                status: true,
            },
        });

        return list;
    }
}

export { ListWorksDoneService };
