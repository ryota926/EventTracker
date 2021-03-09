import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    author: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    postedAt: {
        type: Date,
        default: new Date()
    },
    startDate: Date,
    endDate: Date


})

const PostMessage = mongoose.model('PostMessage', postSchema) //turn schema into model


export default PostMessage; //exporting mongoose model