import PostRoutes from './PostRoutes';
import Router from 'koa-router';
import compose from 'koa-compose';

const router = new Router({ prefix: '/api' }).use(PostRoutes());

export default () => compose([router.routes(), router.allowedMethods()]);
