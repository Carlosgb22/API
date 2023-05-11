import database from "../../domain/repositories/login.repo";
import Login from "../../domain/entities/login";

export default function getAllLogins(repo: database): Promise<Array<Login>> {
    return repo.getAllLogins();
}