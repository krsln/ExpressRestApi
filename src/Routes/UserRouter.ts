import { NextFunction, Request, Response, Router } from 'express';

import UserController from '../Controllers/UserController';

class UserRouter {
    private _router = Router();
    private _controller = UserController;

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    /**
     * Connect routes to their matching controller endpoints.
     */
    private _configure() {
        this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
            try {
                const result = this._controller.defaultMethod();
                res.status(200).json(result);
            }
            catch (error) {
                next(error);
            }
        });
        this._router.get('/errorTest', (req: Request, res: Response, next: NextFunction) => {
            res.status(200).json(this._controller.error());
        });
    }
}

export = new UserRouter().router;
