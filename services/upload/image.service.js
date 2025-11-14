import localCleanup from "./localCleanup.service.js";
import uploadToCloud from "./cloudinaryUploader.service.js";
import paths from "./uploadPaths.service.js";

export default {
  uploadProfileImage: async (localFilePath) => {
    const cloudPath = paths.image.profile;

    try {
      const url = await uploadToCloud(localFilePath, cloudPath);
      return url;
    } finally {
      await localCleanup(localFilePath);
    }
  },

  uploadPostImage: async (localFilePath) => {
    const cloudPath = paths.image.post;

    try {
      const url = await uploadToCloud(localFilePath, cloudPath);
      return url;
    } finally {
      await localCleanup(localFilePath);
    }
  }
};
