import Event from "../../domain/entities/event";
import EventMySQL from "../../infrastructure/dataSources/mysql/event.mysql.adapter";
import addEvent from "./add.event.interactors";
import deleteEvent from "./delete.event.interactors";
import getEventById from "./get.event.interactors";
import getAllEvents from "./getAll.event.interactors";
import updateEvent from "./update.event.interactors";

const adapter = new EventMySQL;
export function addEventEx(event: Event):Promise<number> {
    return addEvent(adapter)(event);
}

export function deleteEventEx(id: number) {
    return deleteEvent(adapter)(id);
}

export function updateEventEx(event: Event) {
    return updateEvent(adapter)(event);
}

export function getEventByIdEx(id: number):Promise<Event>{
    return getEventById(adapter)(id);
}

export function getAllEventsEx(id_Catering: number): Promise<Array<Event>> {
    return getAllEvents(adapter)(id_Catering);
}