import Login from "../../domain/entities/login";
import database from "../../domain/repositories/login.repo";

export default function getLoginById(repo: database): (dni: string, password: string) => Promise<boolean> {
    return (dni: string, password: string) => {
        return repo.getLoginById(dni, password);
    }
}