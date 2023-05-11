import Work from "../../domain/entities/work";
import database from "../../domain/repositories/work.repo";

export default function getWorkById(repo: database): (dni: string, id: number) => Promise<Work> {
    return (dni: string, id: number) => {
        return repo.getWorkById(dni, id);
    }
}