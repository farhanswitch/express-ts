import { Request, Response } from "express";
const db = require("../db/models");

class AuthController {
  register = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req?.body;

    const createdUser = new db.user({
      username,
      password,
    });
    return res.json({ createdUser });
  };
  login(req: Request, res: Response): Response {
    return res.json({ msg: "oklogin" });
  }
}

export default new AuthController();
