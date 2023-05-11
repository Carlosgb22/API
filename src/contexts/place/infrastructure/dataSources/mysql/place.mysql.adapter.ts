import connect from "../../../../../apps/backend/app/dataSourcesClients/mysql.client";
import Place from "../../../domain/entities/place";
import database from "../../../domain/repositories/place.repo";
import loggerService from "../../../../../services/loggerService";

export default class PlaceMySql implements database{
conn = connect()
    async getAllPlaces(): Promise<Array<Place>> {
        loggerService.info("Obteniendo lugares...")
        return new Promise<Array<Place>>(async (resolve, reject) => {
            (await this.conn).query("SELECT * FROM Place", function (error, results, fields) {
                if (error) loggerService.error(error);
                resolve(results);
            });
        })
    }
    async getPlaceById(name: string): Promise<Place> {
        loggerService.info("Obteniendo lugar por su id...")
        return new Promise<Place>(async (resolve, reject) => {
            (await this.conn).query("SELECT * FROM Place WHERE ID = " + (await this.conn).escape(name), function (error, results, fields) {
                if (error) loggerService.error(error);
                resolve(results);
            });
        })
    }
    async addPlace(place: Place): Promise<boolean> {
        loggerService.info("Añadiendo lugar...")
        return new Promise<boolean>(async (resolve, reject) => {
            (await this.conn).query("INSERT INTO Place VALUES (?, ?, ?)", 
                [place.name, place.address, place.phone],
                function (error, results, fields) {
                    if (error) loggerService.error(error);
                    resolve(results);
                });
        })
    }
    async deletePlace(name: string): Promise<boolean> {
        loggerService.info("Borrando lugar...")
        return new Promise<boolean>(async (resolve, reject) => {
            (await this.conn).query("DELETE FROM Place WHERE Name = " + (await this.conn).escape(name), function (error, results, fields) {
                if (error) loggerService.error(error);
                resolve(results);
            });
        })
    }
    async updatePlace(place: Place): Promise<boolean> {
        loggerService.info("Actualizando lugar...")
        return new Promise<boolean>(async (resolve, reject) => {
            (await this.conn).query("UPDATE Place SET 'Name' = '?', 'Address' = ?, 'Phone' = ? WHERE Name = ?",
                [place.name, place.address, place.phone, place.name], function (error, results, fields) {
                    if (error) loggerService.error(error);
                    resolve(results);
                });
        });
    }
}