import {TODOModel} from "../schema/todo.schema";
import {CounterModel} from "../schema/counter.schema";


export class TodoService {
   async getTasks(){
      return await TODOModel.find();
   }

   async createTask(data:{title:string}){
      const counter =await CounterModel.findOneAndUpdate(
         { id:"todoId"},
         { $inc:{seq:1}},
         { new:true,upsert:true }
      );

      const task=new TODOModel({
         ...data,
         id:counter.seq
      });
      return await task.save();
   }

   async updateTask(id:string,data:Partial<{ title:string; completed:boolean}>) {
      return await TODOModel.findOneAndUpdate({id:Number(id)},data,{new:true});
   }

   async deleteTask(id:string) {
      return await TODOModel.findOneAndDelete({id:Number(id)});
   }
}