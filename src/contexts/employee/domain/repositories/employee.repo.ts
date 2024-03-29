import Employee from "../entities/employee";

export default interface database {
    getAllEmployees(id_catering: number): Promise<Array<Employee>>;
    getEmployeeById(id: String): Promise<Employee>;
    addEmployee(emp: Employee): Promise<boolean>;
    deleteEmployee(id: String): Promise<boolean>;
    updateEmployee(emp: Employee): Promise<boolean>;
}