import { Request, Response, NextFunction } from "express";

import Authentication from "../utils/Authentication";
const db = require("../db/models");

class AuthController {
  register = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req?.body;

    const createdUser = await db.user.create({
      username,
      password: Authentication.hashingPassword(password),
    });
    return res.json({ createdUser });
  };
  login = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req?.body;
    const user = await db.user.findOne({
      where: { username },
    });

    if (user) {
      const isValidUser = await Authentication.comparePassword(
        password,
        user?.password
      );
      if (isValidUser) {
        const jwtToken = await Authentication.generateJWT(user?.id, username);
        return res.json({ token: jwtToken });
      } else {
        return res.json({ msg: "Auth failed" });
      }
    } else {
      return res.json({ msg: "invalid user data" });
    }
  };

  profile = (req: Request, res: Response, next: NextFunction): Response => {
    const { credential } = req?.app?.locals;
    if (credential) {
      return res.json({ profile: credential });
    } else {
      return res.json({ msg: "Inavalid credential" });
    }
  };
}

export default new AuthController();
