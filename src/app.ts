import express, {Application, Request, Response, NextFunction} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import ApiRouter from './Routes/ApiRouter';
import ErrorHandler from './Models/ErrorHandler';

class App {
    public app: Application;
    public router = ApiRouter;

    constructor() {
        this.app = express();
        this.setConfig();

        // make server app handle any route starting with '/api'
        this.app.use('/api', this.router);

        // make server app handle any error
        this.app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
            res.status(err.statusCode || 500).json({
                status: 'error', statusCode: err.statusCode, message: err.message
            });
        });

    }

    private setConfig() {
        // support application/json type post data
        this.app.use(bodyParser.json({limit: '50mb'}));
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({limit: '50mb', extended: false }));
        this.app.use(cors());
    }
}

export default new App().app;
