import Catering from "../../domain/entities/catering";
import database from "../../domain/repositories/catering.repo"

export default function addCatering(repo: database): (catering: Catering) => Promise<boolean> {
    return (catering: Catering) => {
        return repo.addCatering(catering);
    }
}