const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();

// Middleware
app.use(express.json());
app.use(express.static("public"));

const corsOptions = {
  origin: "http://localhost:3000",
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

// Serve Frontend in Production
if (process.env.NODE_ENV === "production") {
  const buildPath = path.join(__dirname, "../client/build");
  app.use(express.static(buildPath));

  app.get("/*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../client/build/index.html"),
      function (err) {
        if (err) {
          res.status(500).send(err);
        }
      }
    );
  });
}

// MongoDB Setup
const PORT = process.env.PORT || 3001;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      ssl: true, // Ensure SSL is enabled if required by your MongoDB Atlas cluster
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1);
  }
};

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
