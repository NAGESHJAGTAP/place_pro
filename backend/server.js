const express = require('express');
const hospitalRoutes = require('./routes/hospitalRoutes');  // Import the hospital routes
const attractionRoutes = require('./routes/attractionRoutes');
const pharmacyRoutes = require('./routes/pharmacyRoutes'); 
const garageRoutes = require('./routes/garageRoutes');
const foodShopRoutes = require('./routes/foodShopRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const eventRoutes = require('./routes/eventRoutes');
const sportRoutes = require('./routes/sportRoutes');


const app = express();
app.use(express.json());  // Middleware to parse JSON request body

// Use routes for '/api' path
app.use('/api', hospitalRoutes);  
app.use('/api', attractionRoutes);
app.use('/api', pharmacyRoutes);
app.use('/api', garageRoutes);
app.use('/api', foodShopRoutes);
app.use('/api', hotelRoutes);
app.use('/api', restaurantRoutes);
app.use('/api', eventRoutes)
app.use('/api', sportRoutes);
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
