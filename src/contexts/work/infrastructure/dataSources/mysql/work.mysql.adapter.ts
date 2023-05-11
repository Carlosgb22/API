import connect from "../../../../../apps/backend/app/dataSourcesClients/mysql.client";
import Work from "../../../domain/entities/work";
import database from "../../../domain/repositories/work.repo";
import loggerService from "../../../../../services/loggerService";

export default class WorkMySql implements database{
conn = connect()
    async getAllWorks(): Promise<Array<Work>> {
        loggerService.info("Obteniendo trabajos...")
        return new Promise<Array<Work>>(async (resolve, reject) => {
            (await this.conn).query("SELECT * FROM Work", function (error, results, fields) {
                if (error) loggerService.error(error);
                resolve(results);
            });
        })
    }
    async getWorkById(dni: string, id: number): Promise<Work> {
        loggerService.info("Obteniendo trabajo por su id...")
        return new Promise<Work>(async (resolve, reject) => {
            (await this.conn).query("SELECT * FROM Work WHERE DNI = " + (await this.conn).escape(dni) + "AND Event_ID = " + (await this.conn).escape(id), 
            function (error, results, fields) {
                if (error) loggerService.error(error);
                resolve(results);
            });
        })
    }
    async addWork(work: Work): Promise<boolean> {
        loggerService.info("Añadiendo trabajo...")
        return new Promise<boolean>(async (resolve, reject) => {
            (await this.conn).query("INSERT INTO Work VALUES (?, ?, ?, ?, ?)", 
                [work.dni, work.event_id, work.id_catering, work.hours, work.master],
                function (error, results, fields) {
                    if (error) loggerService.error(error);
                    resolve(results);
                });
        })
    }
    async deleteWork(dni: string, id: number): Promise<boolean> {
        loggerService.info("Borrando trabajo...")
        return new Promise<boolean>(async (resolve, reject) => {
            (await this.conn).query("DELETE FROM Work WHERE DNI = " + (await this.conn).escape(dni) + "AND Event_ID = " + (await this.conn).escape(id), 
            function (error, results, fields) {
                if (error) loggerService.error(error);
                resolve(results);
            });
        })
    }
    async updateWork(work: Work): Promise<boolean> {
        loggerService.info("Actualizando trabajo...")
        return new Promise<boolean>(async (resolve, reject) => {
            (await this.conn).query("UPDATE Work SET 'DNI' = '?', 'Event_ID' = ?, 'Id_Catering' = ?, 'Hours' = ?, 'Master' = ? WHERE DNI = ?",
                [work.dni, work.event_id, work.id_catering, work.hours, work.dni], function (error, results, fields) {
                    if (error) loggerService.error(error);
                    resolve(results);
                });
        });
    }
}