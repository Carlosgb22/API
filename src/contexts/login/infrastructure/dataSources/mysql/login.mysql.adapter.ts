import connect from "../../../../../apps/backend/app/dataSourcesClients/mysql.client";
import Login from "../../../domain/entities/login";
import database from "../../../domain/repositories/login.repo";
import loggerService from "../../../../../services/loggerService";

export default class LoginMySql implements database {
    conn = connect()
    async getAllLogins(): Promise<Array<Login>> {
        loggerService.info("Obteniendo logines...")
        return new Promise<Array<Login>>(async (resolve, reject) => {
            (await this.conn).query("SELECT * FROM Login", function (error, results, fields) {
                if (error) loggerService.error(error);
                resolve(results);
            });
        })
    }
    async getLoginById(dni: string, password: string): Promise<boolean> {
        loggerService.info("Obteniendo login por su id...")
        return new Promise<boolean>(async (resolve, reject) => {
            (await this.conn).query("SELECT * FROM Login WHERE DNI = " + (await this.conn).escape(dni), function (error, results, fields) {
                if (error) loggerService.error(error);
                if (results[0] != null) {
                    if (results[0]['Password'] === password) {
                        resolve(true);
                    }
                } else {
                    resolve(false);
                }
            });
        })
    }
    async addLogin(Login: Login): Promise<boolean> {
        loggerService.info("Añadiendo login...")
        return new Promise<boolean>(async (resolve, reject) => {
            (await this.conn).query("INSERT INTO Login VALUES (?, ?)",
                [Login.dni, Login.password],
                function (error, results, fields) {
                    if (error) loggerService.error(error);
                    resolve(results);
                });
        })
    }
    async deleteLogin(dni: string): Promise<boolean> {
        loggerService.info("Borrando login...")
        return new Promise<boolean>(async (resolve, reject) => {
            (await this.conn).query("DELETE FROM Login WHERE DNI = " + (await this.conn).escape(dni), function (error, results, fields) {
                if (error) loggerService.error(error);
                resolve(results);
            });
        })
    }
    async updateLogin(Login: Login): Promise<boolean> {
        loggerService.info("Actualizando login...")
        return new Promise<boolean>(async (resolve, reject) => {
            (await this.conn).query("UPDATE Login SET 'DNI' = '?', 'Password' = '?' WHERE DNI = ?",
                [Login.dni, Login.password], function (error, results, fields) {
                    if (error) loggerService.error(error);
                    resolve(results);
                });
        });
    }
}