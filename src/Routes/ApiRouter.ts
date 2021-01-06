import { Router } from 'express';
import UserRouter from './UserRouter';
import ProductRouter from './ProductRouter';

class ApiRouter {
    private _router = Router();
    private userRouter = UserRouter;
    private productRouter = ProductRouter;

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    /**
     * Connect routes to their matching routers.
     */
    private _configure() {
        this._router.use('/user', this.userRouter);
        this._router.use('/product', this.productRouter);
    }
}

export = new ApiRouter().router;
