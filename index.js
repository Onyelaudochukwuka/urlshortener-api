const express = require("express");
const connectDB = require('./config/db');
const app = express();

//connect to database
connectDB();
app.use(express.json());

// Define Routes
app.use('/',require('./routes/index'))
app.use('/api/url',require('./routes/url'))
const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log(`server running on ${PORT}`));