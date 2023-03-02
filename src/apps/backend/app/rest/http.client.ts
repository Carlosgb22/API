'use strict';
import express from 'express';
import cors from 'cors';
import expressPino from "pino-http";
import routes from '../../routes/http/entity.routes';
import loggerService from '../../../../services/loggerService';
import pkg from "../../../../../package.json";

//Creamos la aplicación express
const app = express();

// Settings
app.set("pkg", pkg);

app.use(
    express.urlencoded({ extended: true }),
    express.json({limit: '200mb'}),
    cors(),
);

app.get("/api", (req, res) => {
    res.json({
        message: "Welcome to Node API",
        name: app.get("pkg").name,
        version: app.get("pkg").version,
        description: app.get("pkg").description,
        author: app.get("pkg").author,
    });
    loggerService.info("Info Api");
});

//TODO: Set API DOC
app.get("/api/doc", (req, res) => {
    res.json({
        message: "Welcome to Node API Documentation",
        name: app.get("pkg").name,
        version: app.get("pkg").version,
        description: app.get("pkg").description,
        author: app.get("pkg").author,
    });
    loggerService.info("Doc Api");
});

app.use('/', routes);

export default app;