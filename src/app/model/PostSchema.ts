import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: [true, "Please provide a userId"],
            unique: true,
        },
        imageUrl: {
            type: String,
            required: [true, "Please provide a url"],
        },
        caption: {
            type: String,
            required: [true, "Please provide a caption"],
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }

    },
    { versionKey: false }
);

const Post = mongoose.models.posts || mongoose.model("posts", PostSchema);

export default Post;