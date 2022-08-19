import { Router } from "express";

//Routers
import IRouter from "./RouteInterface";

abstract class BaseRoutes implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  abstract routes(): void;
}

export default BaseRoutes;
