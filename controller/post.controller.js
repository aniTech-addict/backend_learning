import Post from '../models/post.model.js';

async function uploadPost(req, res) {
    try {
        // Validate required fields
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        if (!req.body.collectionId) {
            return res.status(400).json({ error: 'Collection ID required' });
        }

        // Create post with file path
        const newPost = new Post({
            collectionId: req.body.collectionId,
            image_source: req.file.path,
            description: req.body.description || ''
        });

        await newPost.save();

        res.status(201).json({
            message: 'Post created successfully',
            data: newPost
        });

    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ error: 'Upload failed' });
    }
}

export {
    uploadPost,
};