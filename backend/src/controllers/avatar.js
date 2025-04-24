import multer from "multer";
import express from "express";

const router = express.Router()
const storage = multer.diskStorage({
    destination: function (req, file, cd) {
      cd(null, "./public/uploads");
    },
    filename: function (req, file, cd) {
      cd(null, file.originalname);
    },
  });
  const upload = multer({ storage });
  router.post("/", upload.single("avatar"), async (req, res) => {
    const avatar = req.file.filename;
    console.log(req.file);
    try {
      res
        .status(200)
        .json({
          msg: "avatar uploaded",
          imageUrl: `http://localhost:8020/static/uploads/${avatar}`,
        });
    } catch (error) {
      res.status(500).json({ err: error });
    }
  });
  export default router