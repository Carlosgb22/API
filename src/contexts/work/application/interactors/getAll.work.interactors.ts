import database from "../../domain/repositories/work.repo";
import Work from "../../domain/entities/work";

export default function getAllWorks(repo: database): Promise<Array<Work>> {
    return repo.getAllWorks();
}