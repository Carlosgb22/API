import database from "../../domain/repositories/work.repo";
import Work from "../../domain/entities/work";

export default function getAllWorks(repo: database): (dni : string) => Promise<Array<Work>> {
    return (dni: string) => {
            return repo.getAllWorks(dni);
    }
}