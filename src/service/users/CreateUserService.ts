import { hash } from "bcryptjs";
import prismaClient from "../../prisma";
import createError from "http-errors";

interface UserRequest {
    name: string;
    email: string;
    password: string;
}

/*
    [x] Verificar se o email foi enviado
    [x] verificar se o email já foi utilizado
    [x] fazer hash da senha
    [x] criar usuário no banco de dados

*/

class CreateUserService {
    async execute({ name, email, password }: UserRequest) {
        //Verificando se o email foi enviado
        if (!email) {
            throw createError(422, "O e-mail é obrigatório.");
        }

        // Verificando se o email já está sendo utilizado
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email,
            },
        });

        if (userAlreadyExists) {
            throw createError(422, "Esse e-mail já está sendo utilizado.");
        }

        // Hash da senha
        const passwordHash = await hash(password, 8);

        // criando usuário no banco de dados
        const user = await prismaClient.user.create({
            data: {
                name,
                email,
                password: passwordHash,
            },
            select: {
                id: true,
                email: true,
                name: true,
            },
        });

        return user;
    }
}

export { CreateUserService };
