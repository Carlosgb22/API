import { addEventEx, deleteEventEx, getAllEventsEx, getEventByIdEx, updateEventEx } from "../../../../contexts/event/application/interactors/event.interactors";
import { Request, Response } from "express";
import loggerService from "../../../../services/loggerService";

export function getAllEvents(req: Request, res: Response) {
    getAllEventsEx().then((events) => res.json(events)).catch((err) => loggerService.error("Error displaying events " + err));
}

export function getEventById(req: Request, res: Response) {
    getEventByIdEx(parseInt(req.params.id)).then((event) => res.json(event)).catch((err) => loggerService.error("Error displaying event with id= " + req.body + " " + err));
}

export function deleteEvent(req: Request, res: Response) {
    deleteEventEx(parseInt(req.params.id)).then((bool) => res.json(bool)).catch((err) => loggerService.error("Error deleting event " + err));
}

export function addEvent(req: Request, res: Response) {
    addEventEx(req.body).then((bool) => res.json(bool)).catch((err) => loggerService.error("Error adding event " + err));
}

export function updateEvent(req: Request, res: Response) {
    updateEventEx(req.body).then((bool) => res.json(bool)).catch((err) => loggerService.error("Error updating event " + err));
}