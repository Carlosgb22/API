import database from "../../domain/repositories/catering.repo";
import Catering from "../../domain/entities/catering";

export default function getAllCaterings(repo: database): Promise<Array<Catering>> {
    return repo.getAllCaterings();
}