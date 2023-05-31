import database from "../../domain/repositories/employee.repo";
import Employee from "../../domain/entities/employee";

export default function getAllEmployees(repo: database): (id_catering:number) => Promise<Array<Employee>> {
    return (id_catering:number) => {
        return repo.getAllEmployees(id_catering);
    }
    
}
