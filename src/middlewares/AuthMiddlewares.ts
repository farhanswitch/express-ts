import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";
require("dotenv").config;

class AuthMiddlewares {
  public static midAuth = (
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void => {
    if (!req?.headers?.authorization) {
      return res.status(401).json({ msg: "Not Authenticated" });
    } else {
      const secretKey: string = process.env.JWT_SECRET_KEY || "secret";
      const token: string = req?.headers?.authorization?.split(" ")[1];

      try {
        const credential: string | object = jwt.verify(token, secretKey);
        if (credential) {
          req.app.locals.credential = credential;
          next();
        } else {
          return res.json({ msg: "Invalid token" });
        }
      } catch (error) {
        return res.json({ statusMsg: "Error", error });
      }
    }
  };
}

export default AuthMiddlewares;
