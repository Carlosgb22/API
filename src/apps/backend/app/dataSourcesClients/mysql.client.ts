import mysql from 'mysql';
import loggerService from '../../../../services/loggerService';

export default async function connect() {
    const options = {
        host: 'localhost',
        user: 'usuario',
        password: 'usuario',
        database: 'Catering'
    }
    const conn = mysql.createConnection(options);
    
    process.on("SIGINT", () => {
        conn.end();
        process.exit();
    });
    
    process.on("exit", () => {
        conn.end();
    });
    return conn;
}