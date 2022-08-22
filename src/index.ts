import express, { Request, Response, Application } from "express";
// import bodyParser from 'body-parser';
import compression from "compression";
import helmet from "helmet";
import cors from "cors";

import UserRoutes from "./routers/UserRoutes";
import AuthRoutes from "./routers/AuthRoutes";

class myServer {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
  }

  private plugins(): void {
    // this.app.use(bodyParser({extended:true}))
    this.app.use(express.json());
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());
  }

  private routes(): void {
    this.app.get("/", (req: Request, res: Response) => {
      res.send("OOP Express TS");
    });

    this.app.post("/", (req: Request, res: Response) => {
      res.send("POST root route");
    });

    this.app.use("/api/v1/users", UserRoutes);
    this.app.use("/api/v1/auth", AuthRoutes);
  }
}

const port: number = 4001;
const server = new myServer().app;
server.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
