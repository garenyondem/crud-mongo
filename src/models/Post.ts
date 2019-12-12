import { Schema, Document, model, Types } from 'mongoose';

export interface IPost extends Document {
    _id: Types.ObjectId;
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
