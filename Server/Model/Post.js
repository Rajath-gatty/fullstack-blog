const mongoose = require("mongoose");

const Post = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        image: {
            url: {
                type: String,
                required: true,
            },
            public_id: {
                type: String,
                required: true,
            }
        },
        author: {
            type: String,
            required: true,
        },
        userId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Post", Post);
