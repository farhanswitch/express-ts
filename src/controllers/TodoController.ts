import { Request, Response } from "express";

import IController from "./ControllerInterface";

//Service
import TodoService from "../services/TodoService";

class TodoController implements IController {
  index = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todos = await service.getAll();

    return res.json({
      todos,
    });
  };
  create = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todo = await service.store();

    return res.json({ todo });
  };
  show = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todo = await service.getOne();

    return res.json({ todo });
  };
  update = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const updateTodo = await service.update();
    return res.json({ updated_count: updateTodo });
  };
  delete = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const deleteTodo = await service.delete();
    return res.json({ deletedTodo: deleteTodo });
  };
}

export default new TodoController();
