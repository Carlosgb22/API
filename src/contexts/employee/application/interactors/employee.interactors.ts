import EmployeeMySQL from "../../infrastructure/dataSources/mysql/employee.mysql.adapter";
import addEmployee from "./add.employee.interactors";
import Employee from "../../domain/entities/employee";
import deleteEmployee from "./delete.employee.interactors";
import updateEmployee from "./update.employee.interactors";
import getEmployeeById from "./get.employee.interactors";
import getAllEmployees from "./getAll.employee.interactors";

const adapter = new EmployeeMySQL;
export function addEmployeeEx(emp: Employee) {
    return addEmployee(adapter)(emp);
}

export function deleteEmployeeEx(id: String) {
    return deleteEmployee(adapter)(id);
}

export function updateEmployeeEx(emp: Employee) {
    return updateEmployee(adapter)(emp);
}

export function getEmployeeByIdEx(id: String):Promise<Employee>{
    return getEmployeeById(adapter)(id);
}

export function getAllEmployeesEx(id_catering: number): Promise<Array<Employee>> {
    return getAllEmployees(adapter)(id_catering);
}