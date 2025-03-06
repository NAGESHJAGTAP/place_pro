const express = require("express");
const multer = require("multer");
const { addGarage, getGarages } = require("../Controllers/garageController");

const router = express.Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });


router.post("/garages", upload.single("image"), addGarage);
router.get("/garages", getGarages);

module.exports = router;
