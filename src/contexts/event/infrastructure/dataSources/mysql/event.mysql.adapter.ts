import connect from "../../../../../apps/backend/app/dataSourcesClients/mysql.client";
import Event from "../../../domain/entities/event";
import database from "../../../domain/repositories/event.repo";
import loggerService from "../../../../../services/loggerService";

export default class EventMySql implements database {
    conn = connect()
    async getAllEvents(id_catering: number): Promise<Array<Event>> {
        loggerService.info("Obteniendo eventos...");
        return new Promise<Array<Event>>(async (resolve, reject) => {
            (await this.conn).query("SELECT * FROM Event WHERE Id_Catering = ?", id_catering, function (error, results, fields) {
                if (error) loggerService.error(error);
                // Ajustar las fechas al formato deseado
                results.forEach((event: Event) => {
                    const date = new Date(event.Date);
                    date.setHours(date.getHours() + 2); // Ajustar la hora según la diferencia horaria
                    event.Date = date;
                });

                resolve(results);
            });
        })
    }
    async getEventById(id: number): Promise<Event> {
        loggerService.info("Obteniendo evento por su id...")
        return new Promise<Event>(async (resolve, reject) => {
            (await this.conn).query("SELECT * FROM Event WHERE ID = " + (await this.conn).escape(id), function (error, results, fields) {
                if (error) loggerService.error(error);
                results[0].Date.setHours(results[0].Date.getHours() + 2);
                resolve(results[0]);
            });
        })
    }
    async addEvent(event: Event): Promise<number> {
        loggerService.info("Añadiendo evento...");
        return new Promise<number>(async (resolve, reject) => {
            (await this.conn).query(
                "INSERT INTO Event (`Id_Catering`, `Date`, `Phone_1`, `Phone_2`, `Place_Name`, `Assembly_Hours`, `Service_Hours`, `OpenBar_Hours`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                [event.Id_Catering, event.Date, event.Phone_1, event.Phone_2, event.Place_Name, event.Assembly_Hours, event.Service_Hours, event.OpenBar_Hours],
                function (error, results, fields) {
                    if (error) {
                        loggerService.error(error);
                        reject(error);
                    } else {
                        resolve(results.insertId);
                    }
                }
            );
        });
    }
    
    async deleteEvent(id: number): Promise<boolean> {
        loggerService.info("Borrando evento...")
        return new Promise<boolean>(async (resolve, reject) => {
            (await this.conn).query("DELETE FROM Event WHERE 'ID' = " + (await this.conn).escape(id), function (error, results, fields) {
                if (error) loggerService.error(error);
                resolve(results);
            });
        })
    }
    async updateEvent(event: Event): Promise<boolean> {
        loggerService.info("Actualizando evento...");
        return new Promise<boolean>(async (resolve, reject) => {
            console.log(event.Date);
            (await this.conn).query(
                "UPDATE Event SET Id_Catering = ?, Date = ?, Phone_1 = ?, Phone_2 = ?, Place_Name = ?, Assembly_Hours = ?, Service_Hours = ?, OpenBar_Hours = ?, revised = ? WHERE ID = ?",
                [
                    event.Id_Catering,
                    event.Date,
                    event.Phone_1,
                    event.Phone_2,
                    event.Place_Name,
                    event.Assembly_Hours,
                    event.Service_Hours,
                    event.OpenBar_Hours,
                    event.revised,
                    event.ID,
                ],
                function (error, results, fields) {
                    if (error) loggerService.error(error);
                    resolve(results);
                }
            );
        });
    }
}