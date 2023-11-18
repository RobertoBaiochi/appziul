import { Router } from "express";

import { CreateUserController } from "./controller/users/CreateUserController";
import { AuthUserController } from "./controller/users/AuthUserController";
import { DetailsUserController } from "./controller/users/DetailsUserController";

import { isAuthenticated } from "./middleware/isAuthenticated";

import { CreateClientController } from "./controller/clients/CreateClientController";
import { ClientListController } from "./controller/clients/ClientListController";
import { UpdateClientController } from "./controller/clients/UpdateClientController";
import { ClientByIdController } from "./controller/clients/ClientByIdController";
import { DeleteClientController } from "./controller/clients/DeleteClientController";

const router = Router();

// ----- USERS -----
// Criar um usuário
router.post("/user", new CreateUserController().handle);

// Verificação de dados -- Rota de Login
router.post("/session", new AuthUserController().handle);

// Trazer Detalhes do usuário logado -- Rota de Detalhes do usuário
router.get("/me", isAuthenticated, new DetailsUserController().handle);

// ----- CLIENTS -----
// Criar um Cliente
router.post("/client", isAuthenticated, new CreateClientController().handle);

// Listar os clientes
router.get("/client", isAuthenticated, new ClientListController().handle);

// Mostrar um único cliente
router.get("/client/:id", isAuthenticated, new ClientByIdController().handle);

// Atualizar Dados do cliente
router.put("/client/:id", isAuthenticated, new UpdateClientController().handle);

// Deletar um cliente
router.delete(
    "/client/:id",
    isAuthenticated,
    new DeleteClientController().handle
);

export { router };
