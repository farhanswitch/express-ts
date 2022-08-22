//Routers
import BaseRoutes from "./BaseRoutes";
//Middlewares
import validate from "../middlewares/AuthValidator";
import AuthMiddlewares from "../middlewares/AuthMiddlewares";
//Controllers
import AuthController from "../controllers/AuthController";

class AuthRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post("/register", validate, AuthController.register);
    this.router.post("/login", validate, AuthController.login);
    this.router.get(
      "/profile",
      AuthMiddlewares.midAuth,
      AuthController.profile
    );
  }
}

export default new AuthRoutes().router;
