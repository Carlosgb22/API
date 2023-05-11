import { addWorkEx, deleteWorkEx, getAllWorksEx, getWorkByIdEx, updateWorkEx } from "../../../../contexts/work/application/interactors/work.interactors";
import { Request, Response } from "express";
import loggerService from "../../../../services/loggerService";

export function getAllWorks(req: Request, res: Response) {
    getAllWorksEx().then((Works) => res.json(Works)).catch((err) => loggerService.error("Error displaying works " + err));
}

export function getWorkById(req: Request, res: Response) {
    getWorkByIdEx(req.params.dni, parseInt(req.params.id)).then((work) => res.json(work)).catch((err) => loggerService.error("Error displaying work with id= " + req.body + " " + err));
}

export function deleteWork(req: Request, res: Response) {
    deleteWorkEx(req.params.dni, parseInt(req.params.id)).then((bool) => res.json(bool)).catch((err) => loggerService.error("Error deleting work " + err));
}

export function addWork(req: Request, res: Response) {
    addWorkEx(req.body).then((bool) => res.json(bool)).catch((err) => loggerService.error("Error adding work " + err));
}

export function updateWork(req: Request, res: Response) {
    updateWorkEx(req.body).then((bool) => res.json(bool)).catch((err) => loggerService.error("Error updating work " + err));
}