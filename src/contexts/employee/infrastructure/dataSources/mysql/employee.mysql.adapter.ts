import connect from "../../../../../apps/backend/app/dataSourcesClients/mysql.client";
import Employee from "../../../domain/entities/employee";
import database from "../../../domain/repositories/employee.repo";
import loggerService from "../../../../../services/loggerService";

export default class EmployeeMySQL implements database {
conn = connect()
    async getAllEmployees(): Promise<Array<Employee>> {
        loggerService.info("Obteniendo empleados...")
        return new Promise<Array<Employee>>(async (resolve, reject) => {
            (await this.conn).query("SELECT * FROM Employee", function (error, results, fields) {
                if (error) loggerService.error(error);
                resolve(results);
            });
        });
    }

    async getEmployeeById(dni: string): Promise<Employee> {
        loggerService.info("Obteniendo empleado por su id...")
        return new Promise<Employee>(async (resolve, reject) => {
            (await this.conn).query("SELECT * FROM Employee WHERE DNI = " + (await this.conn).escape(dni), function (error, results, fields) {
                if (error) loggerService.error(error);
                resolve(results);
            });
        })
    }

    async addEmployee(emp: Employee): Promise<boolean> {
        loggerService.info("Añadiendo empleado...")
        return new Promise<boolean>(async (resolve, reject) => {
            (await this.conn).query("INSERT INTO Employee VALUES (?, ?, ?, ?, ?, ?, ?)", [emp.dni, emp.name, emp.family_name, emp.phone, emp.ss, emp.clerk, emp.master],
                function (error, results, fields) {
                    if (error) loggerService.error(error);
                    resolve(results);
                });
        })
    }

    async deleteEmployee(dni: String): Promise<boolean> {
        loggerService.info("Borrando empleado...")
        return new Promise<boolean>(async (resolve, reject) => {
            (await this.conn).query("DELETE FROM Employee WHERE DNI = " + (await this.conn).escape(dni), function (error, results, fields) {
                if (error) loggerService.error(error);
                resolve(results);
            });
        })
    }

    async updateEmployee(emp: Employee): Promise<boolean> {
        loggerService.info("Actualizando empleado...")
        return new Promise<boolean>(async (resolve, reject) => {
            (await this.conn).query("UPDATE Employee SET DNI = ?, Name = ?, Family_Name = ?, Phone = ?, SS = ?, Clerk = ?, Master = ? WHERE DNI = ?",
                [emp.dni, emp.name, emp.family_name, emp.phone, emp.ss, emp.clerk, emp.master, emp.dni], function (error, results, fields) {
                    if (error) loggerService.error(error);
                    resolve(results);
                });
        });
    }
}