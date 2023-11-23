import prismaClient from "../../prisma";

class DeleteWorkService {
    async execute({ id }) {
        const deleteWork = await prismaClient.work.delete({
            where: {
                id,
            },
        });

        return deleteWork;
    }
}

export { DeleteWorkService };
