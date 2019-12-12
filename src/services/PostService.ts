import { PostModel, IPost } from '../models/Post';

interface IPostService {
    insertPost(post: IPost): Promise<IPost>;
    getPost(postId: string): Promise<IPost | null>;
    updatePost(postId: string, post: IPost): Promise<IPost | null>;
    deletePost(postId: string): Promise<any>;
}

class PostService implements IPostService {
    async insertPost(post: IPost): Promise<IPost> {
        return PostModel.create(post);
    }
    async getPost(postId: string): Promise<IPost | null> {
        return PostModel.findById(postId);
    }
    async updatePost(postId: string, post: IPost): Promise<IPost | null> {
        const options = {
            new: true,
        };
        return PostModel.findByIdAndUpdate(postId, post, options);
    }
    async deletePost(postId: string): Promise<any> {
        const query = {
            _id: postId,
        };
        return PostModel.deleteOne(query);
    }
}

export default new PostService();
