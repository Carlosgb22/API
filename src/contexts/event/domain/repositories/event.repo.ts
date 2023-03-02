import Event from "../entities/event";

export default interface database {
    getAllEvents(): Promise<Array<Event>>;
    getEventById(id: number): Promise<Event>;
    addEvent(event: Event): Promise<boolean>;
    deleteEvent(id: number): Promise<boolean>;
    updateEvent(event: Event): Promise<boolean>;
}