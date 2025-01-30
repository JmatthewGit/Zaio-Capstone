const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

const corsOptions = {
  origin: process.env.NODE_ENV === "production" 
    ? "https://zaio-capstone-23ffac63b637.herokuapp.com"
    : "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
};
app.use(cors(corsOptions));

// Import Routes
const authRoutes = require("./routes/auth.js");
const listingRoutes = require("./routes/listing.js");
const reservationRoutes = require("./routes/reservation.js");

// API Routes
app.use("/auth", authRoutes);
app.use("/api/listings", listingRoutes);
app.use("/api/reservations", reservationRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});

// Serve Frontend in Production
if (process.env.NODE_ENV === "production") {
  const buildPath = path.join(__dirname, "../client/build");
  app.use(express.static(buildPath));
  
  app.get("*", (req, res, next) => {
    try {
      res.sendFile(path.join(__dirname, "../client/build/index.html"));
    } catch (err) {
      next(err);
    }
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  
  if (process.env.NODE_ENV === "production") {
    res.status(500).json({ message: "Internal Server Error" });
  } else {
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
      stack: err.stack
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});