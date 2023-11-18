import prismaClient from "../../prisma";

interface CreateClientProps {
    name_client: string;
    address: string;
    phone: string;
}

/*
    [x] Verificar se os dados estão preenchidos
    [x] Verificar se o Nome do Cliente já existe
    [x] Criar no banco de dados novo cliente

*/

class CreateClientService {
    async execute({ name_client, address, phone }: CreateClientProps) {
        // Verificando se os dados estão preenchidos
        if (!name_client || !address || !phone) {
            throw new Error("Todos os campos devem ser preenchidos.");
        }

        // Verificando se o nome do cliente já existe
        const clientAlreadyExists = await prismaClient.client.findFirst({
            where: {
                name_client: name_client,
            },
        });

        if (clientAlreadyExists) {
            throw new Error("Esse Cliente já existe.");
        }

        // Criando cliente no banco de dados
        const client = await prismaClient.client.create({
            data: {
                name_client,
                address,
                phone,
            },
            select: {
                name_client: true,
                address: true,
                phone: true,
            },
        });

        return client;
    }
}

export { CreateClientService };
