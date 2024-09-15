import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let uploadPath = "";
    if (file.fieldname === "banner") {
      uploadPath = "public/files/banner";
    } else if (file.fieldname === "imageTeacher") {
      uploadPath = "public/files/teacher";
    } else if (file.fieldname === "imageTeacher2") {
      uploadPath = "public/files/teacher";
    } else if (file.fieldname === "imageTeacher3") {
      uploadPath = "public/files/teacher";
    } else if (file.fieldname === "post") {
      uploadPath = "public/files/post";
    } else if (file.fieldname === "moment") {
      uploadPath = "public/files/moment";
    } else if (file.fieldname === "course") {
      uploadPath = "public/files/course";
    } else if (file.fieldname === "share") {
      uploadPath = "public/files/share";
    } else if (file.fieldname === "imageUser") {
      uploadPath = "public/files/user";
    } else if (file.fieldname === "review") {
      uploadPath = "public/files/review";
    } else {
      uploadPath = "public/files/cv";
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpg");
  },
});
export const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 50 },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(
      new Error(
        "File upload only supports the following filetypes - " + filetypes
      )
    );
  },
});
