import Koa from 'koa';
import convert from 'koa-convert';
import respond from 'koa-respond';
import koaBody from 'koa-body';
import responseTime from 'koa-response-time';

class App {
    public app: Koa;

    constructor() {
        this.app = new Koa();
        this.mountMiddlewares();
    }
    private mountMiddlewares(): void {
        this.app.use(koaBody());
        this.app.use(responseTime());
        const respondOptions = {
            statusMethods: {
                unprocessableEntity: 422,
            },
        };
        this.app.use(convert(respond(respondOptions)));
    }
}

export default new App().app;
