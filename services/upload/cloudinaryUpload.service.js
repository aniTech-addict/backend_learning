// services/cloudinary.service.js
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs/promises';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (filePath, folder = 'posts') => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: `content_platform/${folder}`,
      resource_type: 'auto', 
      transformation: [
        { quality: 'auto' },
        { fetch_format: 'auto' },
        { width: 1200, crop: 'limit' } 
      ]
    });

    await fs.unlink(filePath).catch(() => {}); 

    return {
      url: result.secure_url,
      public_id: result.public_id,
      resource_type: result.resource_type
    };
  } catch (error) {
    await fs.unlink(filePath).catch(() => {});
    throw new Error(`Cloudinary upload failed: ${error.message}`);
  }
};