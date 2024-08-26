import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import path from "path";
import userRouter from "./routes/userRoute.js";
import "dotenv/config.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

dotenv.config();
// app config
const app = express();
const port = 4000;

//middleware
app.use(express.json()); //using this request from FE to BE will get through parse
app.use(cors()); //using this we can access BE from FE

// Database connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter);
app.use("/uploads/images", express.static(path.join("uploads", "images")));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Api working");
});

//run the express server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
