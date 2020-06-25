const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect database
connectDB();
app.get('/', (req, res) => res.send('API is running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on ${PORT}`));
