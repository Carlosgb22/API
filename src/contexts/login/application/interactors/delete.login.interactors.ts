import database from "../../domain/repositories/login.repo"

export default function deleteLogin(repo: database): (dni: string) => Promise<boolean> {
    return (dni: string) => {
        return repo.deleteLogin(dni);
    }
}