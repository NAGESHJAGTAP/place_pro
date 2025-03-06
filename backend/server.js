const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db");

const hospitalRoutes = require("./routes/hospitalRoutes");
const attractionRoutes = require("./routes/attractionRoutes");
const pharmacyRoutes = require("./routes/pharmacyRoutes");
const garageRoutes = require("./routes/garageRoutes");
const foodShopRoutes = require("./routes/foodshopRoutes");
const hotelRoutes = require("./routes/hotelRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");
const eventRoutes = require("./routes/eventRoutes");
const sportRoutes = require("./routes/sportRoutes");
const userRoutes = require("./routes/userRoutes");
const loginRoutes = require("./routes/loginRoute");


const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use("/api", hospitalRoutes);
app.use("/api", attractionRoutes);
app.use("/api", pharmacyRoutes);
app.use("/api", garageRoutes);
app.use("/api", foodShopRoutes);
app.use("/api", hotelRoutes);
app.use("/api", restaurantRoutes);
app.use("/api", eventRoutes);
app.use("/api", sportRoutes);
app.use("/", userRoutes);
app.use("/api",loginRoutes);



app.get("/", (req, res) => {
  res.send("Placepro running API ....");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



















