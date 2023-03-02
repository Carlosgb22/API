import database from "../../domain/repositories/place.repo";
import Place from "../../domain/entities/place";

export default function getAllPlaces(repo: database): Promise<Array<Place>> {
    return repo.getAllPlaces();
}