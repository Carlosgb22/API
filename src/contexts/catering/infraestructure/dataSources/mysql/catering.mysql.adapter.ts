import connect from "../../../../../apps/backend/app/dataSourcesClients/mysql.client";
import Catering from "../../../domain/entities/catering";
import database from "../../../domain/repositories/catering.repo";
import loggerService from "../../../../../services/loggerService";

export default class CateringMySql implements database{
conn = connect()
    async getAllCaterings(): Promise<Array<Catering>> {
        loggerService.info("Obteniendo catering...")
        return new Promise<Array<Catering>>(async (resolve, reject) => {
            (await this.conn).query("SELECT * FROM Catering", function (error, results, fields) {
                if (error) loggerService.error(error);
                resolve(results);
            });
        })
    }
    async getCateringById(id: number): Promise<Catering> {
        loggerService.info("Obteniendo catering por su id...")
        return new Promise<Catering>(async (resolve, reject) => {
            (await this.conn).query("SELECT * FROM Catering WHERE `id` = " + (await this.conn).escape(id), 
            function (error, results, fields) {
                if (error) loggerService.error(error);
                resolve(results);
            });
        })
    }
    async addCatering(catering: Catering): Promise<boolean> {
        loggerService.info("Añadiendo catering...")
        return new Promise<boolean>(async (resolve, reject) => {
            (await this.conn).query("INSERT INTO Catering VALUES (?, ?, ?, ?, ?, ?)", 
                [catering.id, catering.name, catering.assemblage_price, catering.service_price, catering.bar_price, catering.kitchen_price],
                function (error, results, fields) {
                    if (error) loggerService.error(error);
                    resolve(results);
                });
        })
    }
    async deleteCatering(id: number): Promise<boolean> {
        loggerService.info("Borrando catering...")
        return new Promise<boolean>(async (resolve, reject) => {
            (await this.conn).query("DELETE FROM Catering WHERE `id` = " + (await this.conn).escape(id), 
            function (error, results, fields) {
                if (error) loggerService.error(error);
                resolve(results);
            });
        })
    }
    async updateCatering(catering: Catering): Promise<boolean> {
        loggerService.info("Actualizando catering...")
        return new Promise<boolean>(async (resolve, reject) => {
            (await this.conn).query("UPDATE Work SET `name` = `?`, `Assemblage_price` = ?, `Service_price` = ?, `Bar_price` = ?, `Kitchen_price` = ? WHERE id = ?",
                [catering.name, catering.assemblage_price, catering.service_price, catering.bar_price, catering.kitchen_price, catering.id], function (error, results, fields) {
                    if (error) loggerService.error(error);
                    resolve(results);
                });
        });
    }
}