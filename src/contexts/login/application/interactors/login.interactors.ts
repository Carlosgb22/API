import Login from "../../domain/entities/login";
import LoginMySQL from "../../infrastructure/dataSources/mysql/login.mysql.adapter";
import addLogin from "./add.login.interactors";
import deleteLogin from "./delete.login.interactors";
import getLoginById from "./get.login.interactors";
import getAllLogins from "./getAll.login.interactors";
import updateLogin from "./update.login.interactors";

const adapter = new LoginMySQL;
export function addLoginEx(login: Login) {
    return addLogin(adapter)(login);
}

export function deleteLoginEx(dni: string) {
    return deleteLogin(adapter)(dni);
}

export function updateLoginEx(login: Login) {
    return updateLogin(adapter)(login);
}

export function getLoginByIdEx(dni: string, password: string):Promise<boolean>{
    return getLoginById(adapter)(dni, password);
}

export function getAllLoginsEx(): Promise<Array<Login>> {
    return getAllLogins(adapter);
}