import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";

const validate = [
  check("description").isString(),
  (req: Request, res: Response, next: NextFunction): Response | void => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        statusMsg: "Error",
        errors: errors.array(),
      });
    } else {
      return next();
    }
  },
];

export default validate;
