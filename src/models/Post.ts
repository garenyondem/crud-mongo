import { Schema, Document, model } from 'mongoose';

export interface IPost extends Document {
    text: string;
    authorName: string;
    deletedAt: Date;
}

const PostSchema: Schema = new Schema(
    {
        text: {
            type: String,
            required: true,
        },
        authorName: {
            type: String,
            required: true,
        },
        deletedAt: {
            type: Date,
        },
    },
    { timestamps: true }
);

export const PostModel = model<IPost>('Post', PostSchema);
