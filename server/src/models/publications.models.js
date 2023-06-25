import mongoose from "mongoose"

const publicationSchema = new mongoose.Schema(
    {
        publication: {
            type: String,
            required: true,
        },
        likes: {
            type: Map,
            of: Boolean,
            default: []
        },
        comments: {
            type: Array,
            default: [],
        },
        images: [
            {
                imageUrl: String
            },
        ],
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

export default mongoose.model("Publication", publicationSchema)
