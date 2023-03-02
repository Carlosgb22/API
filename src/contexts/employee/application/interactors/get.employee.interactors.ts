import Employee from "../../domain/entities/employee";
import database from "../../domain/repositories/employee.repo";

export default function getEmployeeById(repo: database): (dni: String) => Promise<Employee> {
    return (dni: String) => {
        return repo.getEmployeeById(dni);
    }
}