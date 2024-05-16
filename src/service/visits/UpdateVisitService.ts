import prismaClient from "../../prisma";
import createError from "http-errors";

interface UpdateVisitProps {
    id: string;
    scheduled_date: string;
    description: string;
    budget: string;
}

/*
    [x] verificar se todos os dados estão preenchidos
    [x] atualizar dados no banco de dados
*/

class UpdateVisitService {
    async execute({
        id,
        scheduled_date,
        budget,
        description,
    }: UpdateVisitProps) {
        const idExist = await prismaClient.visit.findUnique({
            where: {
                id: id,
            },
        });

        if (!idExist) {
            throw createError(404, "Visita não encontrada");
        }

        // Verificando se todos os dados estão preenchidos
        if (!scheduled_date || !budget || !description) {
            throw createError(422, "Todos os campos devem ser preenchidos.");
        }

        const newVisit = await prismaClient.visit.update({
            where: {
                id: id,
            },
            data: {
                scheduled_date,
                budget,
                description,
            },
        });

        return newVisit;
    }
}

export { UpdateVisitService };
