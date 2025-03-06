// const express = require("express");
// const multer = require("multer");
// const { addPharmacy, getPharmacies } = require("../Controllers/pharmacyController");
// const router = express.Router();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });
// const upload = multer({ storage });

// router.post("/pharmacies", upload.single("image"), addPharmacy);
// router.get("/pharmacies", getPharmacies);

// router.get("/", async (req, res) => {
//   try {
//     const pharmacies = await Pharmacy.find(); 
//     res.json(pharmacies);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching pharmacies", error });
//   }
// });
// module.exports = router;



// const express = require("express");
// const multer = require("multer");
// const { addPharmacy, getPharmacies } = require("../Controllers/pharmacyController");

// const router = express.Router();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });
// const upload = multer({ storage });

// router.post("/pharmacies", upload.single("image"), addPharmacy);
// router.get("/", getPharmacies);

// module.exports = router;

const express = require("express");
const multer = require("multer");
const { addPharmacy, getPharmacies } = require("../Controllers/pharmacyController");

const router = express.Router();

// Configure Multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// Routes
router.post("/pharmacies", upload.single("image"), addPharmacy);
router.get("/pharmacies", getPharmacies);

module.exports = router;


