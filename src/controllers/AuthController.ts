import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";

import Authentication from "../utils/Authentication";
const db = require("../db/models");

class AuthController {
  register = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req?.body;

    const createdUser = await db.user.create({
      // id: Date.now(),
      username,
      password: Authentication.passwordHash(password),
      // createdAt: new Date().toISOString(),
      // updatedAt: new Date().toDateString(),
    });
    return res.json({ createdUser });
  };
  login = async (req: Request, res: Response): Promise<Response> => {
    //find user by username
    const { username, password } = req?.body;

    const user = await db.user.findOne({
      where: { username },
    });

    //cek password
    if (user) {
      const isValidUser = await Authentication.passwordCompare(
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
