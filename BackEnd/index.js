import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./router/book.rout.js";
import cors from "cors";
import userRoute from "./router/user.route.js";

// Initialize express app
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.mongo_DBURL;

// Connect to MongoDB
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// MongoDB connection status
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
    console.log("Error connecting to MongoDB: ", err);
});

// API routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
