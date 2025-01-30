const router = require("express").Router();
const multer = require("multer");
const Listing = require("../models/Listing");
const User = require("../models/User");

/* Configuration Multer for File Upload */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/"); // Store uploaded files in the 'uploads' folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name
  },
});

const upload = multer({ storage });


/* CREATE LISTING */
router.post("/create", upload.array("listingPhotos"), async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    console.log("Uploaded Files:", req.files);
    /* Take the information from the form */
    const {
      creator,
      type,
      location,
      bathCount,
      roomCount,
      amenities,
      listingName,
      description,
      price,
    } = req.body;

    if (!creator || !type || !location || !bathCount || !roomCount || !listingName || !description || !price) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    const listingPhotos = req.files;

    if (!listingPhotos) {
      return res.status(400).send("No file uploaded.");
    }

    const listingPhotoPaths = listingPhotos.map((file) => file.path);

    const newListing = new Listing({
      creator,
      type,
      location,
      bathCount,
      roomCount,
      amenities,
      listingPhotoPaths,
      listingName,
      description,
      price,
    });

    await newListing.save();

    res.status(200).json(newListing);
  } catch (err) {
    res
      .status(409)
      .json({ message: "Failed to create Listing", error: err.message });
    console.log(err);
  }
});

// Get listings
router.get("/properties", async (req, res) => {
  try {
    const listings = await Listing.find().populate("creator");
    res.status(200).json(listings);
  } catch (err) {
    res
      .status(404)
      .json({ message: "Failed to fetch listings", error: err.message });
  }
});

// Delete listing
router.delete("/:listingId", async (req, res) => {
  try {
    const { listingId } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(listingId);

    if (!deletedListing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    res.status(200).json({ message: "Listing deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete listing", error: err.message });
  }
});

// Update listing
router.put("/:listingId", upload.array("listingPhotos"), async (req, res) => {
  try {
    const { listingId } = req.params;
    const {
      type,
      location,
      bathCount,
      roomCount,
      amenities,
      listingName,
      description,
      price,
    } = req.body;

    const listingPhotos = req.files;
    let listingPhotoPaths;

    // Fetch the existing listing to retain photos if none are provided
    const existingListing = await Listing.findById(listingId);
    if (!existingListing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    if (listingPhotos && listingPhotos.length > 0) {
      listingPhotoPaths = listingPhotos.map((file) => file.path);
    } else {
      // Retain existing photos if none are uploaded
      listingPhotoPaths = existingListing.listingPhotoPaths;
    }

    const updatedData = {
      type,
      location,
      bathCount,
      roomCount,
      amenities,
      listingName,
      description,
      price,
      listingPhotoPaths, // Updated photos or retained existing ones
    };

    const updatedListing = await Listing.findByIdAndUpdate(
      listingId,
      { $set: updatedData },
      { new: true } // Return the updated document
    );

    res.status(200).json(updatedListing);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update listing", error: err.message });
  }
});


/* LISTING DETAILS */
router.get("/:listingId", async (req, res) => {
  try {
    const { listingId } = req.params;
    const listing = await Listing.findById(listingId).populate("creator");
    res.status(202).json(listing);
  } catch (err) {
    res
      .status(404)
      .json({ message: "Listing can not found!", error: err.message });
  }
});

module.exports = router;
