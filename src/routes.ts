import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();
/**
 * Tipos de paramêtros.
 * Routes Params => Parametros de rotas
 * Query Params => Filtros e Buscas.
 * Body Params => Enviar uma estrutura de dados na requisição
 */
routes.post("/settings", settingsController.create);
routes.get("/settings/:userName", settingsController.findByUserName);
routes.put("/settings/:userName", settingsController.update);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes }