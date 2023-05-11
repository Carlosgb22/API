import connect from "../../../../../apps/backend/app/dataSourcesClients/mysql.client";
import Event from "../../../domain/entities/event";
import database from "../../../domain/repositories/event.repo";
import loggerService from "../../../../../services/loggerService";

export default class EventMySql implements database{
conn = connect()
    async getAllEvents(): Promise<Array<Event>> {
        loggerService.info("Obteniendo eventos...")
        return new Promise<Array<Event>>(async (resolve, reject) => {
            (await this.conn).query("SELECT * FROM Event", function (error, results, fields) {
                if (error) loggerService.error(error);
                resolve(results);
            });
        })
    }
    async getEventById(id: number): Promise<Event> {
        loggerService.info("Obteniendo evento por su id...")
        return new Promise<Event>(async (resolve, reject) => {
            (await this.conn).query("SELECT * FROM Event WHERE ID = " + (await this.conn).escape(id), function (error, results, fields) {
                if (error) loggerService.error(error);
                resolve(results);
            });
        })
    }
    async addEvent(event: Event): Promise<boolean> {
        loggerService.info("Añadiendo evento...")
        const date = event.date.getFullYear + '-' + event.date.getMonth + '-' + event.date.getDay;
        return new Promise<boolean>(async (resolve, reject) => {
            (await this.conn).query("INSERT INTO Event('Id_Catering', 'Date','Phone_1','Phone_2','Place_Name') VALUES ('?', ?, ?, ?, ?)", 
                [event.id_catering, date, event.phone_1, event.phone_2, event.place_name],
                function (error, results, fields) {
                    if (error) loggerService.error(error);
                    resolve(results);
                });
        })
    }
    async deleteEvent(id: number): Promise<boolean> {
        loggerService.info("Borrando evento...")
        return new Promise<boolean>(async (resolve, reject) => {
            (await this.conn).query("DELETE FROM Event WHERE ID = " + (await this.conn).escape(id), function (error, results, fields) {
                if (error) loggerService.error(error);
                resolve(results);
            });
        })
    }
    async updateEvent(event: Event): Promise<boolean> {
        loggerService.info("Actualizando evento...")
        const date = event.date.getFullYear + '-' + event.date.getMonth + '-' + event.date.getDay;
        return new Promise<boolean>(async (resolve, reject) => {
            (await this.conn).query("UPDATE Event SET 'Id_Catering' = ?, 'Date' = '?', 'Phone_1' = ?, 'Phone_2' = ?, Place_Name = ? WHERE ID = ?",
                [date, event.phone_1, event.phone_2, event.place_name, event.id], function (error, results, fields) {
                    if (error) loggerService.error(error);
                    resolve(results);
                });
        });
    }
}