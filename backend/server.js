const express = require('express');
const hospitalRoutes = require('./routes/hospitalRoutes');  // Import the hospital routes
const attractionRoutes = require('./routes/attractionRoutes');
const pharmacyRoutes = require('./routes/pharmacyRoutes'); 

const app = express();
app.use(express.json());  // Middleware to parse JSON request body

// Use routes for '/api' path
app.use('/api', hospitalRoutes);  
app.use('/api', attractionRoutes);
app.use('/api', pharmacyRoutes);


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
