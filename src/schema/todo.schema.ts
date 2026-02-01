import {Schema,Document,model} from "mongoose";

interface Todo_If{
    id:number;
    title:string;
    completed:boolean;
}

const ToDoSchema = new Schema<Todo_If>({
    id:{type:Number},
    title:{type:String,required:true},
    completed:{type:Boolean,default:false}
}, {id:false});

export const TODOModel = model("task",ToDoSchema);