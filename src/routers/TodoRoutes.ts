//Routers
import BaseRoutes from "./BaseRoutes";
//Validator
import validate from "../middlewares/TodoValidator";
//Controllers
import TodoController from "../controllers/TodoController";
//Middlewares
import AuthMiddlewares from "../middlewares/AuthMiddlewares";

class TodoRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get("/", AuthMiddlewares.midAuth, TodoController.index);
    this.router.post(
      "/",
      AuthMiddlewares.midAuth,
      validate,
      TodoController.create
    );
    this.router.get("/:id", AuthMiddlewares.midAuth, TodoController.show);
    this.router.put(
      "/:id",
      AuthMiddlewares.midAuth,
      validate,
      TodoController.update
    );
    this.router.delete("/:id", AuthMiddlewares.midAuth, TodoController.delete);
  }
}

export default new TodoRoutes().router;
