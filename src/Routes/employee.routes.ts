import { Router } from "express";
import { EmployeeController } from "../controller/employee.controller";

const router = Router();
const employeeController =new EmployeeController();

router.get("/",employeeController.getEmployees);
router.post("/",employeeController.createEmployee);
router.put("/:id",employeeController.updateEmployee);
router.delete("/:id",employeeController.deleteEmployee);

export default router;
