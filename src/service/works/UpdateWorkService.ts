import prismaClient from "../../prisma";
import createError from "http-errors";

/*
    verificar todas as entradas de dados
*/

interface UpdateWorkProps {
    id: string;
    description: string;
    budget: string;
    scheduled_date: string;
}

class UpdateWorkService {
    async execute({
        id,
        description,
        budget,
        scheduled_date,
    }: UpdateWorkProps) {
        if (!description || !budget || !scheduled_date) {
            throw createError(400, "Todos os campos devem ser preenchidos");
        }

        const newWorkData = await prismaClient.work.update({
            where: {
                id: id,
            },
            data: {
                description,
                budget,
                scheduled_date,
            },
        });

        if (!newWorkData) {
            throw createError(404, "O trabalho não existe");
        }

        return newWorkData;
    }
}

export { UpdateWorkService };
