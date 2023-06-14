import Event from "../entities/event";

export default interface database {
    getAllEvents(id_catering: number): Promise<Array<Event>>;
    getEventById(id: number): Promise<Event>;
    addEvent(event: Event): Promise<number>;
    deleteEvent(id: number): Promise<boolean>;
    updateEvent(event: Event): Promise<boolean>;
}