import Employee from "../entities/employee";

export default interface database {
    getAllEmployees(): Promise<Array<Employee>>;
    getEmployeeById(id: String): Promise<Employee>;
    addEmployee(device: Employee): Promise<boolean>;
    deleteEmployee(id: String): Promise<boolean>;
    updateEmployee(device: Employee): Promise<boolean>;
}