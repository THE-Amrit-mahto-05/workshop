import {Request,Response} from "express";
import {TodoService} from "../service/todo.service";

const todoService =new TodoService();

export class TodoController {
    async getTasks(req:Request,res:Response){
    try{
        const tasks = await todoService.getTasks();
            res.status(200).json(tasks);
        }catch(error){
            res.status(500).json({error:"Failed to fetch tasks"});
        }
    }

    async createTask(req:Request,res:Response){
    try{
        const task = await todoService.createTask(req.body);
            res.status(201).json(task);
        }catch(error){
            res.status(500).json({error:"Failed to create task"});
        }
    }

    async updateTask(req: Request, res: Response){
    try{
        const task = await todoService.updateTask(req.params.id as string,req.body);
        if(!task) return res.status(404).json({error:"Task not found"});
            res.status(200).json(task);
        }catch(error){
            res.status(500).json({error:"Failed to update task"});
        }
    }

    async deleteTask(req:Request,res:Response){
    try{
        const task= await todoService.deleteTask(req.params.id as string);
        if (!task) return res.status(404).json({error:"Task not found"});
            res.status(200).json({message:"Task deleted successfully"});
        }catch(error){
            res.status(500).json({error:"Failed to delete task"});
        }
    }
}