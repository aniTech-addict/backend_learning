import mongoose, { ObjectId } from "mongoose";

const postSchema  = new mongoose.Schema({
    
    collectionId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Collection',
        required: true 
    } ,
    image_source: {
        type: String
    },
    description: {
        type: String
    },

},{timestamps:true})

const Post = mongoose.models.Post || mongoose.model('Post', postSchema) 

export default Post;