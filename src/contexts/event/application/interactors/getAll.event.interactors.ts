import database from "../../domain/repositories/event.repo";
import Event from "../../domain/entities/event";

export default function getAllEvents(repo: database): Promise<Array<Event>> {
    return repo.getAllEvents();
}