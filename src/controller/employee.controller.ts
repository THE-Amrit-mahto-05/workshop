import { Request, Response } from "express";
import { EmployeeService } from "../service/employee.service";

const employeeService = new EmployeeService();

export class EmployeeController {
    async getEmployees(req: Request, res: Response) {
        try {
            const employees = await employeeService.getEmployees();
            res.status(200).json(employees);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch employees" });
        }
    }

    async createEmployee(req: Request, res: Response) {
        try {
            const employee = await employeeService.createEmployee(req.body);
            res.status(201).json(employee);
        } catch (error) {
            res.status(500).json({ error: "Failed to create employee" });
        }
    }

    async updateEmployee(req: Request, res: Response) {
        try {
            const employee = await employeeService.updateEmployee(req.params.id as string, req.body);
            if (!employee) return res.status(404).json({ error: "Employee not found" });
            res.status(200).json(employee);
        } catch (error) {
            res.status(500).json({ error: "Failed to update employee" });
        }
    }

    async deleteEmployee(req: Request, res: Response) {
        try {
            const employee = await employeeService.deleteEmployee(req.params.id as string);
            if (!employee) return res.status(404).json({ error: "Employee not found" });
            res.status(200).json({ message: "Employee deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: "Failed to delete employee" });
        }
    }
}
