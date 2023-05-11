import Login from "../../domain/entities/login";
import database from "../../domain/repositories/login.repo";

export default function getLoginById(repo: database): (dni: string) => Promise<Login> {
    return (dni: string) => {
        return repo.getLoginById(dni);
    }
}