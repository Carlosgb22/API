import mysql from 'mysql';
import loggerService from '../../../../services/loggerService';

export default async function connect() {
    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'usuario',
        password: 'usuario',
        database: 'Catering'
    });
    loggerService.info(new Date().toString() + ": " + "MySql connected");
    process.on("SIGINT", () => {
        conn.end();
        process.exit();
    });
    process.on("exit", () => {
        conn.end();
        loggerService.info(new Date().toString() + ": MySql disconnected");
    });
    return conn;
}