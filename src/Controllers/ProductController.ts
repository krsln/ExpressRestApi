import {NextFunction, Request, Response, Router} from 'express';

import Product from "../Models/Product";

class ProductController {
    defaultMethod() {
        return {
            text: `You've reached the ${this.constructor.name} default method`
        };
    }

    getProducts = (req: Request, res: Response) => {
        const result = Product.find((err: any, products: any) => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                res.send(products);
            }
        });
    };


    getProduct = (req: Request, res: Response) => {
        const result = Product.findById(req.params.id, (err: any, product: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(product);
            }
        });
    };

    add = (req: Request, res: Response) => {
        const book = new Product(req.body);
        book.save((err: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(book);
            }
        });
    };

    update = (req: Request, res: Response) => {
        let book = Product.findByIdAndUpdate(req.params.id, req.body, {}, (err: any, book: any) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send(book);
                }
            }
        );
    };

    delete = (req: Request, res: Response) => {
        const book = Product.deleteOne({_id: req.params.id}, {}, (err: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send("Book deleted from database");
            }
        });
    };

}

export = new ProductController();
