import database from "../../domain/repositories/catering.repo"

export default function deleteCatering(repo: database): (id: number) => Promise<boolean> {
    return (id: number) => {
        return repo.deleteCatering(id);
    }
}