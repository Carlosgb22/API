import Event from "../../domain/entities/event";
import database from "../../domain/repositories/event.repo";

export default function getEventById(repo: database): (id: number) => Promise<Event> {
    return (id: number) => {
        return repo.getEventById(id);
    }
}