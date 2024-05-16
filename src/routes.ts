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
import { ListWorkByIdController } from "./controller/works/ListWorkByIdController";
import { UpdateWorkController } from "./controller/works/UpdateWorkController";
import { UpdateFinishWorkController } from "./controller/works/UpdateFinishWorkController";
import { ListWorksDoneController } from "./controller/works/ListWorksDoneController";
import { DeleteWorkController } from "./controller/works/DeleteWorkController";

const router = Router();

// ----- USERS -----

// Rota Criar Usuário
/**
 * @openapi
 * /user:
 *      post:
 *          tags:
 *              - Usuário
 *          summary: Criar um novo usuário
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                                  name:
 *                                      type: string
 *                                  email:
 *                                      type: string
 *                                  password:
 *                                      type: string
 *          responses:
 *               201:
 *                  descriprion: Usuário Criado
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                          properties:
 *                              id:
 *                                  type: string
 *                              nome:
 *                                  type: string
 *                              email:
 *                                  type: string
 *
 *
 */
router.post("/user", new CreateUserController().handle);

//Rota de Login
/**
 * @openapi
 * /session:
 *      post:
 *          tags:
 *              - Usuário
 *          summary: Login usuário
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                                  email:
 *                                      type: string
 *                                  password:
 *                                      type: string
 *          responses:
 *               201:
 *                  descriprion: Usuário Criado
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                          properties:
 *                              id:
 *                                  type: string
 *                              nome:
 *                                  type: string
 *                              email:
 *                                  type: string
 *                              token:
 *                                  type: string
 *
 *
 */
router.post("/session", new AuthUserController().handle);

// Trazer Detalhes do usuário logado -- Rota de Detalhes do usuário
/**
 * @openapi
 * /me:
 *   get:
 *     tags:
 *       - Usuário
 *     summary: Retorna dados do usuário
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Usuário existe no banco de dados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *       404:
 *          description: Usuário não existe
 *
 */
router.get("/me", isAuthenticated, new DetailsUserController().handle);

// ----- CLIENTS -----

// Criar um Cliente
/**
 * @openapi
 * /client:
 *      post:
 *          tags:
 *              - Cliente
 *          summary: Cria um novo cliente
 *          security:
 *              - bearerAuth: []
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                                  name_client:
 *                                      type: string
 *                                  address:
 *                                      type: string
 *                                  phone:
 *                                      type: string
 *          responses:
 *               201:
 *                  description: Cliente criado
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                          properties:
 *                              name_client:
 *                                  type: string
 *                              address:
 *                                  type: string
 *                              phone:
 *                                  type: string
 *
 *
 */
router.post("/client", isAuthenticated, new CreateClientController().handle);

// Listar os clientes
/**
 * @openapi
 * /client:
 *      get:
 *          tags:
 *              - Cliente
 *          summary: Buscar todos os clientes
 *          security:
 *              - bearerAuth: []
 *          responses:
 *               201:
 *                  description: Lista de todos os usuários
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  type: object
 *                                  properties:
 *                                      id:
 *                                          type: string
 *                                      name_client:
 *                                          type: string
 *                                      address:
 *                                          type: string
 *                                      phone:
 *                                          type: string
 *                                      visits:
 *                                          type: array
 *                                          items:
 *                                              type: object
 *                                              properties:
 *                                                  id:
 *                                                      type: string
 *                                                  description:
 *                                                      type: string
 *                                                  budget:
 *                                                      type: string
 *                                                  approved:
 *                                                      type: boolean
 *                                                  created_at:
 *                                                      type: string
 *                                                  updated_at:
 *                                                      type: string
 *                                                  client_id:
 *                                                      type: string
 *                                                  scheduled_date:
 *                                                      type: string
 *
 *
 *
 */
router.get("/client", isAuthenticated, new ClientListController().handle);

// Mostrar um único cliente
/**
 * @openapi
 * /client/{id}:
 *   get:
 *     tags:
 *       - Cliente
 *     summary: Buscar cliente por ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dados do cliente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name_client:
 *                   type: string
 *                 address:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 visits:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       description:
 *                         type: string
 *                       budget:
 *                         type: string
 *                       approved:
 *                         type: boolean
 *                       created_at:
 *                         type: string
 *                       updated_at:
 *                         type: string
 *                       client_id:
 *                         type: string
 *                       scheduled_date:
 *                         type: string
 *       404:
 *         description: Cliente não encontrado
 */
router.get("/client/:id", isAuthenticated, new ClientByIdController().handle);

// Atualizar Dados do cliente
/**
 * @openapi
 * /client/{id}:
 *   put:
 *     tags:
 *       - Cliente
 *     summary: Alterar cliente por ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name_client:
 *                 type: string
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cliente atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name_client:
 *                   type: string
 *                 address:
 *                   type: string
 *                 phone:
 *                   type: string
 *       404:
 *         description: Cliente não encontrado
 */
router.put("/client/:id", isAuthenticated, new UpdateClientController().handle);

// Deletar um cliente
/**
 * @openapi
 * /client/{id}:
 *   delete:
 *     tags:
 *       - Cliente
 *     summary: Deletar cliente por ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Cliente deletado
 *       404:
 *         description: Cliente não encontrado
 */
router.delete(
    "/client/remove",
    isAuthenticated,
    new DeleteClientController().handle
);

// ----- VISITS -----
// Criando uma visita
/**
 * @openapi
 * /visit/add:
 *   post:
 *     tags:
 *       - Visitas
 *     summary: Adicionar uma visita ao cliente
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *               budget:
 *                 type: string
 *               scheduled_date:
 *                 type: string
 *               client_id:
 *                 type: string
 *     responses:
 *       201:
 *         description: Visita criada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 approved:
 *                   type: boolean
 *                 budget:
 *                   type: string
 *                 scheduled_date:
 *                   type: string
 *                 description:
 *                   type: string
 *                 client_id:
 *                   type: string
 *                 client:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name_client:
 *                       type: string
 *                     address:
 *                       type: string
 *                     phone:
 *                       type: string
 *                     created_at:
 *                       type: string
 *                     updated_at:
 *                       type: string
 */
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

// Lista um trabalho pelo ID
router.get("/work/:id", isAuthenticated, new ListWorkByIdController().handle);

// Atualização dos dados do trabalho pelo ID
router.put("/work/:id", isAuthenticated, new UpdateWorkController().handle);

// Finalizar um trabalho
router.put(
    "/finish/work",
    isAuthenticated,
    new UpdateFinishWorkController().handle
);

// Lista Todos os Trabalhos Concluídos
router.get("/done/work", isAuthenticated, new ListWorksDoneController().handle);

router.delete(
    "/delete/work",
    isAuthenticated,
    new DeleteWorkController().handle
);

export { router };
