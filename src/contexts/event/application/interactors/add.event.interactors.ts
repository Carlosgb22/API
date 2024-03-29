import Event from "../../domain/entities/event";
import database from "../../domain/repositories/event.repo"

export default function addEvent(repo: database): (event: Event) => Promise<number> {
    return (event: Event) => {
        return repo.addEvent(event);
    }
}