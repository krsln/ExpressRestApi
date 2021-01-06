import ErrorHandler from '../Models/ErrorHandler';

class UserController {
    defaultMethod() {
        return {
            text: `You've reached the ${this.constructor.name} default method`
        };
    }
    error(){
        throw new ErrorHandler(501, 'Not implemented method');
    }
}

export = new UserController();
