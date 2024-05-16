import prismaClient from "../../prisma";
import createError from "http-errors";

/*
    [x] retornar detalhes do usuário através do ID do usuário
*/

class DetailsUserService {
    async execute(user_id: string) {
        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id,
            },
            select: {
                id: true,
                name: true,
                email: true,
            },
        });

        if (!user) {
            throw createError(401, "Token inválido");
        }

        return user;
    }
}

export { DetailsUserService };
