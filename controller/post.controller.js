import Post from '../models/post.model.js';

async function uploadPost(req,res){
    console.log(
        "Received Data",
        req.body
    )
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json(
        {
            data: newPost,
            message: "Post created successfully"
        }
    );
} 

export { 
    uploadPost,
    
};