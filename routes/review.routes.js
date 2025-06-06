// routes/reviewRoutes.js
import express from "express";
import Review from "../models/Review.js";
import Room from "../models/Room.js";

const router = express.Router();

// GET all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().populate("user", "name");
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch reviews", err });
  }
});

// POST a new review
router.post("/", async (req, res) => {
  try {
    const { user, room, rating, comment } = req.body;

    const review = new Review({ user, room, rating, comment });
    await review.save();

    // Optionally add to Room model
    await Room.findByIdAndUpdate(room, { $push: { reviews: review._id } });

    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: "Failed to post review", err });
  }
});

// GET reviews by Room ID
router.get("/room/:roomId", async (req, res) => {
  try {
    const reviews = await Review.find({ room: req.params.roomId }).populate(
      "user",
      "name"
    );
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch room reviews", err });
  }
});

export default router;
