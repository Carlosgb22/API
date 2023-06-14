import database from "../../domain/repositories/event.repo";
import Event from "../../domain/entities/event";

export default function getAllEvents(repo: database): (id_catering : number) => Promise<Array<Event>> {
    return  (id_catering: number) => {
        return repo.getAllEvents(id_catering);
    }
}