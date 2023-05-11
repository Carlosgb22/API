import Catering from "../../domain/entities/catering";
import database from "../../domain/repositories/catering.repo";

export default function updateCatering(repo: database): (catering: Catering) => Promise<boolean> {
    return (catering: Catering) => {
        return repo.updateCatering(catering);
    }
}