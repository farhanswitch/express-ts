import { Request, Response } from "express";

import IController from "./ControllerInterface";

let data: any[] = [
  { id: 1, name: "Farhan" },
  { id: 2, name: "Budi" },
  { id: 3, name: "Fera" },
];

class UserController implements IController {
  index(req: Request, res: Response): Response {
    return res.json({ users: data });
  }
  create(req: Request, res: Response): Response {
    const { id, name } = req.body;
    data.push({ id: parseInt(id), name });
    return res.json({ users: data });
  }
  show(req: Request, res: Response): Response {
    const { id } = req.params;
    const selectedUser = data.find((user) => user.id === parseInt(id));
    return res.json({ user: selectedUser });
  }
  update(req: Request, res: Response): Response {
    const { id } = req?.params;
    const { name } = req?.body;

    data = data.map((user) => {
      if (user.id === parseInt(id)) {
        return { id: parseInt(id), name };
      }
      return user;
    });
    return res.json(data);
  }
  delete(req: Request, res: Response): Response {
    const { id } = req.params;
    data = data.filter((user) => user.id !== parseInt(id));
    return res.json({ data });
  }
}

export default new UserController();
