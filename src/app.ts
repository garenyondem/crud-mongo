import Koa from 'koa';
import convert from 'koa-convert';
// @ts-ignore
import respond from 'koa-respond';
import bodyParser from 'koa-bodyparser';

class App {
    public app: Koa;

    constructor() {
        this.app = new Koa();
        this.mountMiddlewares();
    }
    private mountMiddlewares(): void {
        this.app.use(bodyParser());
        const respondOptions = {
            statusMethods: {
                unprocessableEntity: 422,
            },
        };
        this.app.use(convert(respond(respondOptions)));
    }
}

export default new App().app;
