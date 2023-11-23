import prismaClient from "../../prisma";

class UpdateFinishWorkService {
    async execute(id: string) {
        const finishedWork = await prismaClient.work.update({
            where: {
                id,
            },
            data: {
                status: true,
            },
        });

        return finishedWork;
    }
}

export { UpdateFinishWorkService };
