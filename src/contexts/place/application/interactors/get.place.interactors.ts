import Place from "../../domain/entities/place";
import database from "../../domain/repositories/place.repo";

export default function getPlaceById(repo: database): (name: string) => Promise<Place> {
    return (name: string) => {
        return repo.getPlaceById(name);
    }
}