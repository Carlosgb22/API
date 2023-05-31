import Login from "../entities/login";

export default interface database {
    getAllLogins(): Promise<Array<Login>>;
    getLoginById(dni: string, password: string): Promise<boolean>;
    addLogin(login: Login): Promise<boolean>;
    deleteLogin(dni: string): Promise<boolean>;
    updateLogin(login: Login): Promise<boolean>;
}