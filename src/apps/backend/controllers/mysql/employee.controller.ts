import { addEmployeeEx, deleteEmployeeEx, getAllEmployeesEx, getEmployeeByIdEx, updateEmployeeEx } from "../../../../contexts/employee/application/interactors/employee.interactors";
import { Request, Response } from "express";
import loggerService from "../../../../services/loggerService";

export function getAllEmployees(req: Request, res: Response) {
    getAllEmployeesEx().then((employees) => res.json(employees)).catch((err) => loggerService.error("Error displaying employees " + err));
}

export function getEmployeeById(req: Request, res: Response) {
    getEmployeeByIdEx(req.params.id).then((employee) => res.json(employee)).catch((err) => loggerService.error("Error displaying employee with id= " + req.body + " " + err));
}

export function deleteEmployee(req: Request, res: Response) {
    deleteEmployeeEx(req.params.id).then((bool) => res.json(bool)).catch((err) => loggerService.error("Error deleting employee " + err));
}

export function addEmployee(req: Request, res: Response) {
    addEmployeeEx(req.body).then((bool) => res.json(bool)).catch((err) => loggerService.error("Error adding employee " + err));
}

export function updateEmployee(req: Request, res: Response) {
    updateEmployeeEx(req.body).then((bool) => res.json(bool)).catch((err) => loggerService.error("Error updating employee " + err));
}