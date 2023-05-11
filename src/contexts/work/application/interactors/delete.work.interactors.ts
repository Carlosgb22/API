import database from "../../domain/repositories/work.repo"

export default function deleteWork(repo: database): (dni: string, id: number) => Promise<boolean> {
    return (dni: string, id: number) => {
        return repo.deleteWork(dni, id);
    }
}