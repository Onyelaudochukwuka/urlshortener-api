const express = require("express");
const connectDB = require('./config/db');
const app = express();

//connect to database
connectDB();
app.use(express.json({ extented: false }));

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log(`server running on ${PORT}`));