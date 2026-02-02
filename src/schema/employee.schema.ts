import { Schema, Document, model } from "mongoose";

interface Employee_If {
    id:number;
    name:string;
    email:string;
    designation:string;
}

const EmployeeSchema = new Schema<Employee_If>({
    id:{type:Number},
    name:{type:String,required:true},
    email:{type:String,required:true},
    designation:{type:String,required:true }
}, { id:false});

export const EmployeeModel = model("employee", EmployeeSchema);
