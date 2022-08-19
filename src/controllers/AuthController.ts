import { Request, Response } from "express";

class AuthController {
  register(req: Request, res: Response): Response {
    return res.json({ msg: "ok" });
  }
  login(req: Request, res: Response): Response {
    return res.json({ msg: "ok" });
  }
}

export default new AuthController();
