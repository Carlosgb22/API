import Place from "../../domain/entities/place";
import PlaceMySQL from "../../infrastructure/dataSources/mysql/place.mysql.adapter";
import addPlace from "./add.place.interactors";
import deletePlace from "./delete.place.interactors";
import getPlaceById from "./get.place.interactors";
import getAllPlaces from "./getAll.place.interactors";
import updatePlace from "./update.place.interactors";

const adapter = new PlaceMySQL;
export function addPlaceEx(place: Place) {
    return addPlace(adapter)(place);
}

export function deletePlaceEx(name: string) {
    return deletePlace(adapter)(name);
}

export function updatePlaceEx(place: Place) {
    return updatePlace(adapter)(place);
}

export function getPlaceByIdEx(name: string):Promise<Place>{
    return getPlaceById(adapter)(name);
}

export function getAllPlacesEx(id_catering: number): Promise<Array<Place>> {
    return getAllPlaces(adapter)(id_catering);
}