/*
    [x] verificar se o cliente existe pelo ID
    [x] deletar o cliente
*/

import prismaClient from "../../prisma";

class DeleteClientService {
    async execute(id: string) {
        //verificando se o cliente existe
        const clientExist = await prismaClient.client.findUnique({
            where: {
                id: id,
            },
        });

        if (!clientExist) {
            throw new Error("Cliente não existe.");
        }

        // deletando o cliente
        const deletClient = await prismaClient.client.delete({
            where: {
                id: id,
            },
        });

        return deletClient;
    }
}

export { DeleteClientService };
