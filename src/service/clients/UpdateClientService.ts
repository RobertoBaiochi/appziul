import prismaClient from "../../prisma";

/*
    [x] verificar se o ID existe
    [x] verificar se os campos não estão preenchidos
    [x] fazer o update dos dados
*/

interface UpdateClientProps {
    id: string;
    name_client: string;
    address: string;
    phone: string;
}

class UpdateClientService {
    async execute({ id, name_client, address, phone }: UpdateClientProps) {
        // Verificando se o ID existe
        const clientExists = await prismaClient.client.findUnique({
            where: {
                id: id,
            },
        });

        if (!clientExists) {
            throw new Error("Cliente não existe.");
        }

        // verificando se os campos estão preenchidos
        if (!name_client || !address || !phone) {
            throw new Error("Todos os Campos devem estar preenchidos.");
        }

        // fazendo update dos dados
        const client = await prismaClient.client.update({
            where: {
                id: id,
            },
            data: {
                name_client,
                address,
                phone,
            },
        });

        return client;
    }
}

export { UpdateClientService };
