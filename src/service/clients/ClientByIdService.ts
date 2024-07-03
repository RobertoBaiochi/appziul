/*
    [x] retornar apenas um cliente através do id.
*/

import prismaClient from "../../prisma";

class ClientByIdService {
    async execute(id: string) {
        const client = await prismaClient.client.findUnique({
            where: {
                id: id,
            },
            select: {
                id: true,
                name_client: true,
                address: true,
                phone: true,
                visits: true,
                works: true,
            },
        });

        return client;
    }
}

export { ClientByIdService };
