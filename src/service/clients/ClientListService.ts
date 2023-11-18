import prismaClient from "../../prisma";

/*
    [x] Listar todos os clientes
*/

class ClientListService {
    async execute() {
        const clients = await prismaClient.client.findMany({
            select: {
                id: true,
                name_client: true,
                address: true,
                phone: true,
                visits: true,
                works: true,
            },
        });

        return clients;
    }
}

export { ClientListService };
