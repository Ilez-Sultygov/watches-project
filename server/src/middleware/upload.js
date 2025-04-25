// const multer = require("multer");
// const path = require("path");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, '..', "uploads"));
//   },
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, '..', "uploadsAdmin"));
//   },
//   filename: function (req, file, cb) {
//     const ext = path.extname(file.originalname) ;
//     cb(null, `${Date.now()}_${file.fieldname}${ext}`);
//   },
// });

// const upload = multer({ storage });

// module.exports = {
//   uploadSingle: upload.single("image"),
//   upload
// };

const multer = require("multer");
const path = require("path");

// Middleware для загрузки файлов в папку 'uploads'
const storageUser = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', "uploads"));  // Путь для обычных пользователей
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}_${file.fieldname}${ext}`);
  },
});

const uploadUser = multer({ storage: storageUser });

// Middleware для загрузки файлов в папку 'uploadsAdmin'
const storageAdmin = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', "uploadsAdmin"));  // Путь для админов
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}_${file.fieldname}${ext}`);
  },
});

const uploadAdmin = multer({ storage: storageAdmin });

module.exports = {
  uploadUser,   // Middleware для обычных пользователей
  uploadAdmin   // Middleware для админов
};