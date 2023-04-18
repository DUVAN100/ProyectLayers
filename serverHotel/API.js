import express from "express";
import { routes } from './Routes/routers.js'
import { setConnection } from './database/connection.js'

export class API{
    constructor(){
        this.app = express();
        this.conectWithDb();
        this.routerequest();
    };
    raiseServer(){
        this.app.listen(process.env.PORT, ()=>console.log(`Serer on in ${process.env.PORT}`))
    };
    routerequest(){     
        this.app.use(express.json() )
        this.app.use('/', routes);
    };
    conectWithDb(){
        setConnection();
    };
































}