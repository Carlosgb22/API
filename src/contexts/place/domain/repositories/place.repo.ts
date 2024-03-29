import Place from "../entities/place";

export default interface database {
    getAllPlaces(id_catering: number): Promise<Array<Place>>;
    getPlaceById(name: string): Promise<Place>;
    addPlace(place: Place): Promise<boolean>;
    deletePlace(name: string): Promise<boolean>;
    updatePlace(place: Place): Promise<boolean>;
}