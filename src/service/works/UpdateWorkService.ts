/*
    verificar todas as entradas de dados
*/

import prismaClient from "../../prisma";

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
            throw new Error(
                "[UPDATE_WORK] - Todos os campos devem ser preenchidos"
            );
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

        return newWorkData;
    }
}

export { UpdateWorkService };
