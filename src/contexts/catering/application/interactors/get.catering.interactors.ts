import Catering from "../../domain/entities/catering";
import database from "../../domain/repositories/catering.repo";

export default function getCateringById(repo: database): (id: number) => Promise<Catering> {
    return (id: number) => {
        return repo.getCateringById(id);
    }
}