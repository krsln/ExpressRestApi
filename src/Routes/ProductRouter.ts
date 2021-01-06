import {NextFunction, Request, Response, Router} from 'express';
import ProductController from '../Controllers/ProductController';

class ProductRouter {
    private _router = Router();
    private _controller = ProductController;

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
        this._router.get('/test', (req: Request, res: Response, next: NextFunction) => {
            res.status(200).json(this._controller.defaultMethod());
        });
        this._router.get('/', this._controller.getProducts);
        this._router.get('/:id', this._controller.getProduct);

        this._router.post("/", this._controller.add);
        this._router.patch("/:id", this._controller.update);

        this._router.delete("/:id", this._controller.delete);
    }
}

export = new ProductRouter().router;
