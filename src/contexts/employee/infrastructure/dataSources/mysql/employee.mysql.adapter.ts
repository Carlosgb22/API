import connect from "../../../../../apps/backend/app/dataSourcesClients/mysql.client";
import Employee from "../../../domain/entities/employee";
import database from "../../../domain/repositories/employee.repo";
import loggerService from "../../../../../services/loggerService";

export default class EmployeeMySQL implements database {
conn = connect()
    async getAllEmployees(id_catering: number): Promise<Array<Employee>> {
        loggerService.info("Obteniendo empleados...")
        return new Promise<Array<Employee>>(async (resolve, reject) => {
            (await this.conn).query("SELECT * FROM Employee WHERE Id_Catering = ?;",id_catering, function (error, results, fields) {
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
                for (const act of results) {
                    const emp: Employee = act;
                    resolve(emp);
                }
            });
        })
    }

    async addEmployee(emp: Employee): Promise<boolean> {
        loggerService.info("Añadiendo empleado...")
        return new Promise<boolean>(async (resolve, reject) => {
            (await this.conn).query("INSERT INTO Employee VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [emp.DNI, emp.Id_Catering, emp.Name, emp.Family_Name, emp.Phone, emp.SS, emp.Clerk, emp.Admin],
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
            (await this.conn).query("UPDATE Employee SET Id_Catering = ?, Name = ?, Family_Name = ?, Phone = ?, SS = ?, Clerk = ?, Admin = ? WHERE DNI = ?",
                [emp.Name, emp.Id_Catering, emp.Family_Name, emp.Phone, emp.SS, emp.Clerk, emp.Admin, emp.DNI], function (error, results, fields) {
                    if (error) loggerService.error(error);
                    resolve(results);
                });
        });
    }
}