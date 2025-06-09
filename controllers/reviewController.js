import Review from "../models/Review.js";

// POST a review for a room
export const postReview = async (req, res) => {
  try {
    const { roomId } = req.params;
    const { rating, comment } = req.body;
    const userId = req.user.id; // assuming you have auth middleware that sets req.userId

    if (!rating || !comment) {
      return res
        .status(400)
        .json({ message: "Rating and comment are required" });
    }

    // Optional: prevent user from posting multiple reviews for same room
    const existingReview = await Review.findOne({ room: roomId, user: userId });
    if (existingReview) {
      return res
        .status(400)
        .json({ message: "You have already reviewed this room" });
    }

    const review = new Review({
      room: roomId,
      user: userId,
      rating,
      comment,
    });

    const savedReview = await review.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET all reviews for a room, sorted newest first
export const getReviewsByRoom = async (req, res) => {
  try {
    const { roomId } = req.params;

    const reviews = await Review.find({ room: roomId })
      .populate("user", "name email") // populate user info, adjust as needed
      .sort({ createdAt: -1 }); // newest first

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
