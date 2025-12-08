const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure directory exists
const ensureDirectoryExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder;

    if (file.fieldname === "employerPhoto") {
      folder = path.join(__dirname, "..", "uploads", "photos", "employer");
    } else if (file.fieldname === "candidatePhoto") {
      folder = path.join(__dirname, "..", "uploads", "photos", "candidate");
    } else if (file.fieldname === "resume") {
      folder = path.join(__dirname, "..", "uploads", "resumes");
    } else if (file.fieldname === "newsImage") {
      folder = path.join(__dirname, "..", "uploads", "news");
    } else if (file.fieldname === "bannerImage") {
      folder = path.join(__dirname, "..", "uploads", "banner");
    } else {
      return cb(new Error("Invalid file field name"), null);
    }

    ensureDirectoryExists(folder);
    cb(null, folder);
  },

  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  }
});

// File filter logic
const fileFilter = (req, file, cb) => {
  const imageRegex = /\.(jpg|jpeg|png|webp)$/i;
  const resumeRegex = /\.(pdf|doc|docx)$/i;

  const imageFields = ["candidatePhoto", "employerPhoto", "newsImage", "bannerImage"];

  if (imageFields.includes(file.fieldname) && imageRegex.test(file.originalname)) {
    cb(null, true);
  } else if (file.fieldname === "resume" && resumeRegex.test(file.originalname)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type."), false);
  }
};

const limits = {
  fileSize: 5 * 1024 * 1024 // 10MB
};

const upload = multer({ storage, fileFilter, limits });
module.exports = upload;
