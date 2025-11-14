import localCleanup from "./localCleanup.service.js";
import uploadToCloud from "./cloudinaryUploader.service.js";
import paths from "./uploadPaths.service.js";

export default {
 
  uploadPostVideo: async (localFilePath) => {
    const cloudPath = paths.video.post;

    try {
      const url = await uploadToCloud(localFilePath, cloudPath);
      return url;
    } finally {
      await localCleanup(localFilePath);
    }
  }
};
