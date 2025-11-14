import fs from 'fs';

async function localCleanup(file) {
    try {
        await fs.promises.unlink(file);
        console.log('File deleted successfully');
        return true;
    } catch (err) {
        console.error('Error deleting file:', err);
        return false;
    }
}

export default localCleanup;