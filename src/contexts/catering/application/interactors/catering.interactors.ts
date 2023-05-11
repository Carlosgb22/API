import Catering from "../../domain/entities/catering";
import CateringMySQL from "../../infraestructure/dataSources/mysql/catering.mysql.adapter";
import addCatering from "./add.catering.interactors";
import deleteCatering from "./delete.catering.interactors";
import getCateringById from "./get.catering.interactors";
import getAllCaterings from "./getAll.catering.interactors";
import updateCatering from "./update.catering.interactors";

const adapter = new CateringMySQL;
export function addCateringEx(work: Catering) {
    return addCatering(adapter)(work);
}

export function deleteCateringEx(id: number) {
    return deleteCatering(adapter)(id);
}

export function updateCateringEx(work: Catering) {
    return updateCatering(adapter)(work);
}

export function getCateringByIdEx(id: number):Promise<Catering>{
    return getCateringById(adapter)(id);
}

export function getAllCateringsEx(): Promise<Array<Catering>> {
    return getAllCaterings(adapter);
}