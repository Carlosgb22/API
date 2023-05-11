import Login from "../entities/login";

export default interface database {
    getAllLogins(): Promise<Array<Login>>;
    getLoginById(name: string): Promise<Login>;
    addLogin(login: Login): Promise<boolean>;
    deleteLogin(name: string): Promise<boolean>;
    updateLogin(login: Login): Promise<boolean>;
}