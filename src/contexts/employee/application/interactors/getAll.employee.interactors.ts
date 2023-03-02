import database from "../../domain/repositories/employee.repo";
import Employee from "../../domain/entities/employee";

export default function getAllEmployees(repo: database): Promise<Array<Employee>> {
    return repo.getAllEmployees();
}
