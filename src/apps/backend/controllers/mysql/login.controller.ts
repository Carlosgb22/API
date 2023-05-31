import { addLoginEx, deleteLoginEx, getAllLoginsEx, getLoginByIdEx, updateLoginEx } from "../../../../contexts/login/application/interactors/login.interactors";
import { Request, Response } from "express";
import loggerService from "../../../../services/loggerService";

export function getAllLogins(req: Request, res: Response) {
    getAllLoginsEx().then((logins) => res.json(logins)).catch((err) => loggerService.error("Error displaying Logins " + err));
}

export function getLoginById(req: Request, res: Response) {
    getLoginByIdEx(req.params.dni, req.params.password).then((bool) => {
        if (bool) {
            req.session.dni = req.params.dni
        }
        res.json(bool);
    }).catch((err) => loggerService.error("Error displaying login with dni= " + req.params.dni + " " + err));
}

export function deleteLogin(req: Request, res: Response) {
    deleteLoginEx(req.params.dni).then((bool) => res.json(bool)).catch((err) => loggerService.error("Error deleting login " + err));
}

export function addLogin(req: Request, res: Response) {
    addLoginEx(req.body).then((bool) => res.json(bool)).catch((err) => loggerService.error("Error adding login " + err));
}

export function updateLogin(req: Request, res: Response) {
    updateLoginEx(req.body).then((bool) => res.json(bool)).catch((err) => loggerService.error("Error updating login " + err));
}