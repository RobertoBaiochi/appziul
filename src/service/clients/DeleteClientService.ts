import createError from "http-errors";

/*
    [x] verificar se o cliente existe pelo ID
    [x] deletar o cliente
*/

import prismaClient from "../../prisma";

class DeleteClientService {
    async execute(id: string) {
        // verificando se o cliente existe
        const clientExist = await prismaClient.client.findUnique({
            where: {
                id: id,
            },
        });

        if (!clientExist) {
            throw createError(404, "Cliente não existe.");
        }

        // deletando todas as visitas
        await prismaClient.visit.deleteMany({
            where: {
                client_id: id,
            },
        });

        // deletando todos os trabalhos trabalhos
        await prismaClient.work.deleteMany({
            where: {
                client_id: id,
            },
        });

        // deletando o cliente
        const deleteClient = await prismaClient.client.delete({
            where: {
                id,
            },
        });

        return { deleteClient };
    }
}

export { DeleteClientService };
