const express = require('express');
const cors = require('cors');

const { connectDB } = require('./config/db');
const hospitalRoutes = require('./routes/hospitalRoutes');  
const attractionRoutes = require('./routes/attractionRoutes');
const pharmacyRoutes = require('./routes/pharmacyRoutes'); 
const garageRoutes = require('./routes/garageRoutes');
const foodShopRoutes = require('./routes/foodShopRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const eventRoutes = require('./routes/eventRoutes');
const sportRoutes = require('./routes/sportRoutes');
const userRoutes = require('./routes/userRoutes');
const { login } = require('./Controllers/loginControllers');


const app = express();
const PORT = 3000;

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', hospitalRoutes);  
app.use('/api', attractionRoutes);
app.use('/api', pharmacyRoutes);
app.use('/api', garageRoutes);
app.use('/api', foodShopRoutes);
app.use('/api', hotelRoutes);
app.use('/api', restaurantRoutes);
app.use('/api', eventRoutes)
app.use('/api', sportRoutes);
app.use('/', userRoutes);
app.use('/', login)



app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));



















