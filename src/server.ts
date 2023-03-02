import { Application } from "express";
import appClient from "../src/apps/backend/app/rest/http.client";
import config from "./apps/backend/config/config";
const expressPinoLogger = require('express-pino-logger');
import loggerService from './services/loggerService';
import connect from "./apps/backend/app/dataSourcesClients/mysql.client";

class Server {
    app: Application;

    constructor() {
        this.app = appClient;
        const loggerMidlleware = expressPinoLogger({
            logger: loggerService,
            autoLogging: true,
        });

        appClient.use(loggerMidlleware);
    }

    start() {
        try {
            this.app.listen(config.PORT, async () => {
                loggerService.info(`Servidor corriendo en el puerto: ${config.PORT}`);
                connect();
            });
        } catch (error: any) {
            loggerService.error(error);
        }
    }
}
const server = new Server();
server.start();

export default server;