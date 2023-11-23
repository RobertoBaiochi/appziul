/*
    [x] retornar um trabalho através do ID
*/

import prismaClient from "../../prisma";

class ListWorkByIdService {
    async execute(id: string) {
        const work = await prismaClient.work.findUnique({
            where: {
                id: id,
            },
        });

        return work;
    }
}

export { ListWorkByIdService };
