import { addPlaceEx, deletePlaceEx, getAllPlacesEx, getPlaceByIdEx, updatePlaceEx } from "../../../../contexts/place/application/interactors/place.interactors";
import { Request, Response } from "express";
import loggerService from "../../../../services/loggerService";

export function getAllPlaces(req: Request, res: Response) {
    getAllPlacesEx(parseInt(req.params.id_catering)).then((places) => res.json(places)).catch((err) => loggerService.error("Error displaying places " + err));
}

export function getPlaceById(req: Request, res: Response) {
    getPlaceByIdEx(req.params.name).then((place) => res.json(place)).catch((err) => loggerService.error("Error displaying place with name= " + req.body + " " + err));
}

export function deletePlace(req: Request, res: Response) {
    deletePlaceEx(req.params.name).then((bool) => res.json(bool)).catch((err) => loggerService.error("Error deleting place " + err));
}

export function addPlace(req: Request, res: Response) {
    addPlaceEx(req.body).then((bool) => res.json(bool)).catch((err) => loggerService.error("Error adding place " + err));
}

export function updatePlace(req: Request, res: Response) {
    updatePlaceEx(req.body).then((bool) => res.json(bool)).catch((err) => loggerService.error("Error updating place " + err));
}