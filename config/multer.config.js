import multer from 'multer';
import path from "path";

const storage = (folderPath) =>
  multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, folderPath);
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const name = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, name + ext);
    }
  });

  const configUploader = (folderPath) => {
    return multer({
        storage: storage(folderPath) ,
        limits: { fileSize: 1024 * 1024 * 5 }, // 5MB
    });
  }

export default configUploader;

//upload;