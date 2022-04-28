const express = require("express");
const dotenv = require("dotenv").config();



const connectDB = require("./config/db");
connectDB();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/productRoutes"));



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
