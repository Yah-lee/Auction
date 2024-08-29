const multer = require('multer');  // Import Multer for handling file uploads
const path = require('path');      // Import Path for managing file paths

// Configure storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // Generate unique filenames with extensions
  }
});

// Initialize Multer with the storage configuration
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Set a file size limit (10 MB)
  fileFilter: function (req, file, cb) {
    const fileTypes = /jpeg|jpg|png|gif|mp4|mkv/; // Allowed file types for images and videos
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true); // Accept the file
    } else {
      cb(new Error('Error: Only images and videos are allowed!')); // Reject the file
    }
  }
});

module.exports = upload; // Export the configured Multer instance
