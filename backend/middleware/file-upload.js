import multer from "multer";

const fileUpload = multer({
  storage: multer.diskStorage({
    destination: "uploads/images",
    filename: (req, file, cb) => {
      return cb(null, `${Date.now()}${file.originalname}`);
    },
  }),
});

export default fileUpload;
