import Place from "../../domain/entities/place";
import database from "../../domain/repositories/place.repo";

export default function updatePlace(repo: database): (place: Place) => Promise<boolean> {
    return (place: Place) => {
        return repo.updatePlace(place);
    }
}