import Login from "../../domain/entities/login";
import database from "../../domain/repositories/login.repo"

export default function addLogin(repo: database): (login: Login) => Promise<boolean> {
    return (login: Login) => {
        return repo.addLogin(login);
    }
}