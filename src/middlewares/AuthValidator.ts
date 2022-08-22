import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";

const validate = [
  check("username").isString(),
  check("password").isLength({ min: 8 }),
  (req: Request, res: Response, next: NextFunction): Response | void => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        statusMsg: "Error",
        errors: errors.array(),
      });
    } else {
      next();
    }
  },
];

export default validate;
