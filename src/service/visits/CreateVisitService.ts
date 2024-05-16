import prismaClient from "../../prisma";
import createError from "http-errors";

interface CreateVisitProps {
    client_id: string;
    description: string;
    budget: string;
    scheduled_date: string;
}

/*
    [x] verificar se todos os campos estão preenchidos
    [x] Criar visitas no banco de dados
*/

class CreateVisitService {
    async execute({
        description,
        budget,
        scheduled_date,
        client_id,
    }: CreateVisitProps) {
        // Verificando se os itens estão preenchidos
        if (!description || !budget || !scheduled_date || !client_id) {
            throw createError(400, "Todos os Campos devem ser preenchidos");
        }

        // Criando visitas
        const scheduledVisit = await prismaClient.visit.create({
            data: {
                description,
                budget,
                scheduled_date,
                client_id,
            },
            select: {
                id: true,
                approved: true,
                budget: true,
                scheduled_date: true,
                description: true,
                client_id: true,
                client: true,
            },
        });

        return scheduledVisit;
    }
}

export { CreateVisitService };
