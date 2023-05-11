import { addCateringEx, deleteCateringEx, getAllCateringsEx, getCateringByIdEx, updateCateringEx } from "../../../../contexts/catering/application/interactors/catering.interactors";
import { Request, Response } from "express";
import loggerService from "../../../../services/loggerService";

export function getAllCaterings(req: Request, res: Response) {
    getAllCateringsEx().then((caterings) => res.json(caterings)).catch((err) => loggerService.error("Error displaying caterings " + err));
}

export function getCateringById(req: Request, res: Response) {
    getCateringByIdEx(parseInt(req.params.id)).then((catering) => res.json(catering)).catch((err) => loggerService.error("Error displaying catering with id= " + req.body + " " + err));
}

export function deleteCatering(req: Request, res: Response) {
    deleteCateringEx(parseInt(req.params.id)).then((bool) => res.json(bool)).catch((err) => loggerService.error("Error deleting catering " + err));
}

export function addCatering(req: Request, res: Response) {
    addCateringEx(req.body).then((bool) => res.json(bool)).catch((err) => loggerService.error("Error adding catering " + err));
}

export function updateCatering(req: Request, res: Response) {
    updateCateringEx(req.body).then((bool) => res.json(bool)).catch((err) => loggerService.error("Error updating catering " + err));
}