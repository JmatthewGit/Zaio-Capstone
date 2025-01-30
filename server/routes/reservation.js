const router = require("express").Router();

const Reservation = require("../models/Reservation");

/* CREATE Reservation */
router.post("/create", async (req, res) => {
  try {
    const { customerId, checkInDate, checkOutDate, totalGuests } = req.body;
    const newReservation = new Reservation({
      customerId,
      checkInDate,
      checkOutDate,
      totalGuests,
    });
    await newReservation.save();
    res.status(200).json(newReservation);
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({
        message: "Fail to create a new Reservation!",
        error: err.message,
      });
  }
});

// Get reservations
router.get("/book", async (req, res) => {
  try {
    const reservations = await Reservation.find().populate("customerId");
    console.log("Reservations fetched from DB:", reservations); // Log data for debugging
    res.status(200).json(reservations);
  } catch (err) {
    console.error("Failed to fetch reservations:", err.message);
    res
      .status(404)
      .json({ message: "Failed to fetch reservations", error: err.message });
  }
});

/* Reservation DETAILS */
router.get("/:reservationId", async (req, res) => {
  try {
    const { reservationId } = req.params;
    const reservation = await Reservation.find().populate("customerId");
    console.log("Populated Reservations:", reservation);
    res.status(202).json(reservation);
  } catch (err) {
    res
      .status(404)
      .json({ message: "Reservation can not found!", error: err.message });
  }
});

module.exports = router;
