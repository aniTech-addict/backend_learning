// config/multer.config.js
import multer from 'multer';

const upload = multer({ dest: 'uploads/temp/' })

export default upload;