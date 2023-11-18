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

import { CreateVisitController } from "./controller/visits/CreateVisitController";
import { ListVisitsController } from "./controller/visits/ListVisitsController";
import { VisitByIdController } from "./controller/visits/VisitByIdController";
import { UpdateVisitController } from "./controller/visits/UpdateVisitController";
import { DeleteVisitController } from "./controller/visits/DeleteVisitController";

import { UpdateApproveVisitController } from "./controller/works/UpdateApproveVisitController";
import { CreateWorkController } from "./controller/works/CreateWorkController";
import { ListWorksController } from "./controller/works/ListWorksController";

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

// ----- VISITS -----
// Criando uma visita
router.post("/visit/add", isAuthenticated, new CreateVisitController().handle);

// Listar todas as visitas
router.get("/visit", isAuthenticated, new ListVisitsController().handle);

//mostrar uma única visita
router.get("/visit/:id", isAuthenticated, new VisitByIdController().handle);

// Atualizar dados de uma visita
router.put("/visit/:id", isAuthenticated, new UpdateVisitController().handle);

// Deletar uma visita
router.delete(
    "/visit/remove",
    isAuthenticated,
    new DeleteVisitController().handle
);

// ----- WORKS -----
// Aprovar para trabalho
router.put(
    "/work/approved",
    isAuthenticated,
    new UpdateApproveVisitController().handle
);

// Criar um trabalho
router.post("/work/add", isAuthenticated, new CreateWorkController().handle);

// Listar todos os trabalhos
router.get("/work", isAuthenticated, new ListWorksController().handle);

export { router };
