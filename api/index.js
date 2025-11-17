const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const authRouter = require("./routes/auth");
const productRouter = require("./routes/products");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");
const adminRouter = require("./routes/admin");
const { verifyToken } = require("./middleware/verifyToken");
const Product = require("./models/Product");
require("dotenv").config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Mongodb Connected!"));
app.use("/auth", authRouter);
app.use("/products", productRouter);
app.use("/cart", cartRouter);
app.use("/order", orderRouter);
app.use("/admin", adminRouter);





app.get("/", async (req, res) => {
  res.send("Hello!");
});

app.listen(PORT, () => console.log("No worries! "));
