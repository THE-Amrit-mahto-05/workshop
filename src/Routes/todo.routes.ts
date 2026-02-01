import {Router} from "express";
import {TodoController} from "../controller/todo.controller";

const router = Router();
const todoController = new TodoController();

router.get("/",todoController.getTasks);
router.post("/",todoController.createTask);
router.put("/:id",todoController.updateTask);
router.delete("/:id",todoController.deleteTask);

export default router;
