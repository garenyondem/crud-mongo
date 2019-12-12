import PostController from '../controllers/PostController';
import Router from 'koa-router';

const router = new Router({ prefix: '/posts' })
    .get('/:postId', async (ctx, next) => {
        await PostController.read(ctx, next);
    })
    .put('/:postId', async (ctx, next) => {
        await PostController.update(ctx, next);
    })
    .del('/:postId', async (ctx, next) => {
        await PostController.delete(ctx, next);
    })
    .post('/', async (ctx, next) => {
        await PostController.create(ctx, next);
    });

export default () => router.routes();
