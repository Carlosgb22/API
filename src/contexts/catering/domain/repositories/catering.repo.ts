import Catering from "../entities/catering";

export default interface database {
    getAllCaterings(): Promise<Array<Catering>>;
    getCateringById(id: number): Promise<Catering>;
    addCatering(catering: Catering): Promise<boolean>;
    deleteCatering(id: number): Promise<boolean>;
    updateCatering(catering: Catering): Promise<boolean>;
}