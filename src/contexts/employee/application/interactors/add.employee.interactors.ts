import Employee from "../../domain/entities/employee";
import database from "../../domain/repositories/employee.repo"

export default function addEmployee(repo: database): (emp: Employee) => Promise<boolean> {
    return (emp: Employee) => {
        return repo.addEmployee(emp);
    }
}