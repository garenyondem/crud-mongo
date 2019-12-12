import PostRoutes from './PostRoutes';
import Router from 'koa-router';
// @ts-ignore
import { compose } from 'koa-convert';

const router = new Router({ prefix: '/api' }).use(PostRoutes());

export default () => compose([router.routes(), router.allowedMethods()]);
