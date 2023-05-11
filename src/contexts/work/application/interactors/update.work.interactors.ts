import Work from "../../domain/entities/work";
import database from "../../domain/repositories/work.repo";

export default function updateWork(repo: database): (work: Work) => Promise<boolean> {
    return (work: Work) => {
        return repo.updateWork(work);
    }
}