import Work from "../../domain/entities/work";
import WorkMySQL from "../../infrastructure/dataSources/mysql/work.mysql.adapter";
import addWork from "./add.work.interactors";
import deleteWork from "./delete.work.interactors";
import getWorkById from "./get.work.interactors";
import getAllWorks from "./getAll.work.interactors";
import getAllWorksId from "./getAll.work.id.interactors";
import updateWork from "./update.work.interactors";

const adapter = new WorkMySQL;
export function addWorkEx(work: Work) {
    return addWork(adapter)(work);
}

export function deleteWorkEx(dni: string, id: number) {
    return deleteWork(adapter)(dni, id);
}

export function updateWorkEx(work: Work) {
    return updateWork(adapter)(work);
}

export function getWorkByIdEx(dni: string, id: number):Promise<Work>{
    return getWorkById(adapter)(dni, id);
}

export function getAllWorksEx(dni: string): Promise<Array<Work>> {
    return getAllWorks(adapter)(dni);
}

export function getAllWorksIdEx(id: number): Promise<Array<Work>> {
    return getAllWorksId(adapter)(id);
}