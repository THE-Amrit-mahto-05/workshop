import { EmployeeModel } from "../schema/employee.schema";
import { CounterModel } from "../schema/counter.schema";

export class EmployeeService {
    async getEmployees() {
        return await EmployeeModel.find();
    }

    async createEmployee(data: { name:string; email:string; designation:string }) {
        const counter = await CounterModel.findOneAndUpdate(
            {id:"employeeId" },
            {$inc:{seq:1}},
            {new:true,upsert:true}
        );

        const employee= new EmployeeModel({...data,id: counter.seq});
        return await employee.save();
    }

    async updateEmployee(id:string, data:Partial<{name:string; email:string; designation:string}>) {
        return await EmployeeModel.findOneAndUpdate({ id:Number(id) },data,{new:true});
    }

    async deleteEmployee(id:string) {
        return await EmployeeModel.findOneAndDelete({ id:Number(id) });
    }
}
