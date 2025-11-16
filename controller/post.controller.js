import upload from '../config/multer.config.js';
import { uploadToCloudinary } from '../services/upload/cloudinaryUpload.service.js';
import Post from '../models/post.model.js';

const createPost = async (req, res) => {
  try {
    const uploadMiddleware = upload.single('image'); // or .array() for multiple

    uploadMiddleware(req, res, async (err) => {
      if (err) return res.status(400).json({ error: err.message });

      if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

      const { url, public_id } = await uploadToCloudinary(req.file.path);

      const post = await Post.create({
        imageUrl: url,
        cloudinaryId: public_id,
        author: req.user.id,
      });

      res.status(201).json(post);
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


export {
    createPost,
    
}