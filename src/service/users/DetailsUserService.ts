import prismaClient from "../../prisma";

/*
    [] retornar detalhes do usuário através do ID do usuário
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

        return user;
    }
}

export { DetailsUserService };
