const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

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

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Database connection error:', err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});