import database from "../../domain/repositories/event.repo"

export default function deleteEvent(repo: database): (id: number) => Promise<boolean> {
    return (id: number) => {
        return repo.deleteEvent(id);
    }
}