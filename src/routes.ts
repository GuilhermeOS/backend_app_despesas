import { Router } from "express";
import auth from "./middlewares/auth";

import HelloController from "./controllers/HelloController";
import UsersController from "./controllers/UsersController";
import ExpensesController from "./controllers/ExpensesController";
import SessionsController from "./controllers/SessionsController";

const routes = Router();

routes.get("/hello", HelloController.index);
routes.post("/sessions", SessionsController.create);

routes.use(auth);

// ROTAS USER =======================================
routes.get("/users", UsersController.index);
routes.get("/users/:id", UsersController.show);
routes.post("/users", UsersController.create);
routes.put("/users/:id", UsersController.update);
routes.delete("/users/:id", UsersController.destroy);

// ROTAS EXPANSE ====================================
routes.get("/users/:user_id/expenses", ExpensesController.index);
routes.post("/users/:user_id/expenses", ExpensesController.create);
routes.delete("/users/:user_id/expenses/:id", ExpensesController.destroy);

export default routes;