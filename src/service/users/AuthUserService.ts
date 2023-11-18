import { compare } from "bcryptjs";
import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";

/*
    [x] Verificar se o usuário existe
    [x] verificar se a senha esta correta comparando com HASH
    [x] gerar um token quando o usuário fizer o login
    [x] retornar id, name, email, token
*/

interface AuthUserProps {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({ email, password }: AuthUserProps) {
        // Verificando se o usuário Existe
        const user = await prismaClient.user.findFirst({
            where: {
                email: email,
            },
        });

        if (!user) {
            throw new Error("Usuário ou senha inválido.");
        }

        // Verificando se a senha está correta
        const matchPassword = compare(password, user.password);

        if (!matchPassword) {
            throw new Error("Usuário ou senha inválido.");
        }

        // Gerando um token de login para o usuário
        const token = sign(
            {
                name: user.name,
                email: user.email,
            },
            process.env.JWT_SECRET!,
            {
                subject: user.id,
                expiresIn: "30d",
            }
        );

        // Retornando dados de resposta de login
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token,
        };
    }
}

export { AuthUserService };
