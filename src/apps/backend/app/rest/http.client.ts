'use strict';
import express from 'express';
import cors from 'cors';
import routes from '../../routes/http/entity.routes';
import loggerService from '../../../../services/loggerService';
import pkg from "../../../../../package.json";
import { getEmployeeByIdEx } from '../../../../contexts/employee/application/interactors/employee.interactors';
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

//Creamos la aplicación express
const app = express();

// Settings
app.set("pkg", pkg);

app.use(
    express.urlencoded({ extended: true }),
    express.json({ limit: '200mb' }),
    cors(),
);

const sessionStore = new MySQLStore({
    /* Configuración de la conexión a la base de datos */
    host: 'localhost',
    port: 3306,
    user: 'usuario',
    password: 'usuario',
    database: 'Catering',
});

app.use(session({
    key: 'session_cookie',
    secret: 'kcvfbthrnymyt',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}))

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

app.get("/checkSession", (req, res) => {
    if(req.session) {
        getEmployeeByIdEx(req.session.dni!).then((employee) => {
            res.json(employee)
        }).catch((err) => loggerService.error("Error displaying employee with dni= " + req.body + " " + err));
    }else res.send(false)
    loggerService.info("Comprobando sesion");
});

app.use('/', routes);

export default app;