const express = require("express");
const mongoose = require("mongoose");
const addItems = require("./controller/addItems");
const cartItem = require("./controller/cartItem");
const tableItem = require("./controller/tableItem");
const bookingItem = require("./controller/bookingItem");
const orderItems = require("./controller/orderItems");
const authentication = require("./controller/authentication");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
];
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(cookieParser());

mongoose
  .connect(
    "mongodb+srv://bipanarai:Bipana123@cluster0.rnhqnoe.mongodb.net/Resturant",
    {}
  )
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((error) => {
    console.log("Connection error:", error);
  });

app.use("/api", addItems);
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); //app.use le chai as a middleware kaam garxa,yo line le chai hamile upload gareko file lae  access grna help garxa,so that upload vako file hami frontend ma use garna sakxam
app.use("/api", cartItem);
app.use("/api", tableItem);
app.use("/api", bookingItem);
app.use("/api", orderItems);
app.use("/api", authentication);

app.listen(5000, () => {
  console.log("server connected");
});
