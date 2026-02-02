import express from "express";
import mongoose from "mongoose";

import employeeRoutes from "./Routes/employee.routes";

interface App_Interface {
    startServer(): void;
    connectDatabase(): void;
    initializeRouter(): void;
}

export class App implements App_Interface {
    port:number;
    app:express.Application;

    constructor() {
        this.port = 4000;
        this.app = express();
        this.app.use(express.json());

        this.startServer();
        this.initializeRouter();
        this.connectDatabase();
    }

    startServer(): void {
        this.app.listen(this.port, () => {
            console.log(`server started at http://localhost:${this.port}`);
        });
    }

    async connectDatabase(): Promise<void> {
        try {
            await mongoose.connect("mongodb://localhost:27017/todo_db");
            console.log("Database Connected");
        } catch (error) {
            console.log("Database connection error", error);
        }
    }

    initializeRouter(): void {
        this.app.get("/", (req, res) => {
            res.json({
                message: "Welcome to the Employee API",
                endpoints: {

                    listEmployees: "GET /employee",
                    createEmployee: "POST /employee",
                    updateEmployee: "PUT /employee/:id",
                    deleteEmployee: "DELETE /employee/:id"
                }
            });
        });

        this.app.use("/employee", employeeRoutes);
        console.log("Routes Initialized");
    }
}