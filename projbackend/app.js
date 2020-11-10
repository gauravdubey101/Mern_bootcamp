require('dotenv').config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");


//db connections
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  });


  //This is my middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


//my routes
app.use("/api",authRoutes);



//PORT
const port = process.env.PORT || 8000;


//Starting server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
