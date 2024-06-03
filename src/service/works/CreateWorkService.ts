import prismaClient from "../../prisma";
import createError from "http-errors";
/*
    [x] buscar a vista pelo id e se for approved for TRUE
    [x] criar o WORK através do visita_id
*/

interface CreateWorkProps {
    id: string;
    scheduled_date: string;
}

class CreateWorkService {
    async execute({ id, scheduled_date }: CreateWorkProps) {
        if (!scheduled_date) {
            throw createError(400, "O campo é o obrigatório");
        }

        // Buscando vista pelo ID e se está APROVADO
        const visitApproved = await prismaClient.visit.findFirst({
            where: {
                id: id,
                approved: true,
            },
        });

        if (!visitApproved) {
            throw createError(404, "Visita não encontrada");
        }

        //Criando um WORK para Atrás do retorno da visita
        const work = await prismaClient.work.create({
            data: {
                budget: visitApproved.budget,
                description: visitApproved.description,
                client_id: visitApproved.client_id,
                scheduled_date,
            },
            select: {
                id: true,
                status: true,
                budget: true,
                description: true,
                employee: true,
                scheduled_date: true,
                client: true,
            },
        });

        return work;
    }
}

export { CreateWorkService };
