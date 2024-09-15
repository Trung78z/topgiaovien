import multer from "multer";
import path from "path";

const pdfStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Đường dẫn lưu file PDF
    const uploadPath = "public/files/cv";
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const timestamp = Date.now();
    const originalName = path.parse(file.originalname).name;
    const extension = path.extname(file.originalname);

    cb(null, `${originalName}-${timestamp}${extension}`);
  },
});

// Middleware multer dành cho file PDF
export const uploadPdf = multer({
  storage: pdfStorage,
  limits: { fileSize: 1024 * 1024 * 10 }, // Giới hạn kích thước file là 10MB
  fileFilter: (req, file, cb) => {
    const filetypes = /pdf/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error("File upload only supports the following filetypes - PDF"));
  },
});
