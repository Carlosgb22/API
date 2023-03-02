import database from "../../domain/repositories/employee.repo"

export default function deleteEmployee(repo: database): (dni: String) => Promise<boolean> {
    return (dni: String) => {
        return repo.deleteEmployee(dni);
    }
}