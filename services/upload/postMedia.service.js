import localCleanup from "./localCleanup.service.js";
import uploadToCloud from "./cloudinaryUploader.service.js";
import paths from "./uploadPaths.service.js";
import path from "path";

const uploadPostMedia = async (filePaths) => {
  const urls = [];

  try {
    for (const filePath of filePaths) {
      const ext = path.extname(filePath).toLowerCase();
      let cloudPath;
      if (['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext)) {
        cloudPath = paths.image.post;
      } else if (['.mp4', '.avi', '.mov', '.mkv'].includes(ext)) {
        cloudPath = paths.video.post;
      } else {
        cloudPath = paths.image.post; // default to image
      }
      const url = await uploadToCloud(filePath, cloudPath);
      urls.push(url);
    }
    return urls;
  } finally {
    for (const filePath of filePaths) {
      await localCleanup(filePath);
    }
  }
};

export default { uploadPostMedia };