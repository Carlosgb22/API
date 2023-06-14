import database from "../../domain/repositories/work.repo";
import Work from "../../domain/entities/work";

export default function getAllWorksId(repo: database): (id : number) => Promise<Array<Work>> {
    return (id: number) => {
            return repo.getAllWorksId(id);
    }
}