import database from "../../domain/repositories/place.repo";
import Place from "../../domain/entities/place";

export default function getAllPlaces(repo: database): (id_catering: number) => Promise<Array<Place>> {
    return (id_catering) => {
        return repo.getAllPlaces(id_catering);
    }
}