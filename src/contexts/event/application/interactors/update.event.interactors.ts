import Event from "../../domain/entities/event";
import database from "../../domain/repositories/event.repo";

export default function updateEvent(repo: database): (event: Event) => Promise<boolean> {
    return (event: Event) => {
        return repo.updateEvent(event);
    }
}