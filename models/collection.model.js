import mongoose, { ObjectId } from "mongoose";

const collectionSchema = new mongoose.Schema({
  
    name: {
        type: String,
        required: true,
    },
    authors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],  // many-to-many link

    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],

    type: {
        type: String,
        enum: ['public', 'private']
    },

    description: {
        type: String,
        maxLength: 2000
    },

}, {timestamps: true});

const Collection = mongoose.models.Collection || mongoose.model('Collection', collectionSchema);

export default Collection;