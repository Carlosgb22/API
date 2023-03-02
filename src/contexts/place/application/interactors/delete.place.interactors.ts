import database from "../../domain/repositories/place.repo"

export default function deletePlace(repo: database): (name: string) => Promise<boolean> {
    return (name: string) => {
        return repo.deletePlace(name);
    }
}