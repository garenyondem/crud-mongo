import { Context } from 'koa';
import PostService from '../services/PostService';

interface IPostController {
    create(ctx: Context, next: Function): Promise<void>;
    read(ctx: Context, next: Function): Promise<void>;
    update(ctx: Context, next: Function): Promise<void>;
    delete(ctx: Context, next: Function): Promise<void>;
}

class PostController implements IPostController {
    async create(ctx: Context, next: Function): Promise<void> {
        console.info('Creating new post');
        const post = ctx.request.body;
        try {
            const insertedPost = await PostService.insertPost(post);
            ctx.ok({
                post: insertedPost,
            });
        } catch (err) {
            ctx.internalServerError();
        }
        next();
    }
    async read(ctx: Context, next: Function): Promise<void> {
        console.info('Reading post');
        const postId = ctx.params.postId;
        try {
            const post = await PostService.getPost(postId);
            ctx.ok({
                post: post,
            });
        } catch (err) {
            ctx.internalServerError();
        }
        next();
    }
    async update(ctx: Context, next: Function): Promise<void> {
        console.info('Updating post');
        const postId = ctx.params.postId;
        const post = ctx.request.body;
        try {
            const updatedPost = await PostService.updatePost(postId, post);
            ctx.ok({
                post: updatedPost,
            });
        } catch (err) {
            ctx.internalServerError();
        }
        next();
    }
    async delete(ctx: Context, next: Function): Promise<void> {
        console.info('Removing post');
        const postId = ctx.params.postId;
        try {
            await PostService.deletePost(postId);
            ctx.ok();
        } catch (err) {
            ctx.internalServerError();
        }
        next();
    }
}

export default new PostController();
