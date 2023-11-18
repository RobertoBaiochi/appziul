import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

/*
    [x] Receber o token;
    [x] separar o "Bearer" do Token
    [x] validar o token
    [x] Colocar o ID to TOKEN dentro de uma variável de REQ.
*/

interface Payload {
    sub: string;
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    // Recebendo o token
    const authToken = req.headers.authorization;

    // Validando token
    if (!authToken) {
        return res.status(401).end();
    }

    // Separando a String "Bearer Token"
    const [, token] = authToken.split(" ");

    try {
        // verificando se o token contém as informações de usuários que criamos no AUTHUSERSENVICE
        const { sub } = verify(token, process.env.JWT_SECRET!) as Payload;

        // declarando o sub em um variável criado em REQ dentro de TYPES>EXPRESS>INDEX e modificando o tsconfig>>Typeroots
        req.user_id = sub;

        return next();
    } catch (err) {
        return res.status(401).end();
    }
}
