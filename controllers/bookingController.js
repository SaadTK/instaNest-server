// controllers/bookingController.js
import Booking from "../models/Booking.js";

// Create a booking
export const createBooking = async (req, res) => {
  try {
    const booking = new Booking({ ...req.body, user: req.userId });
    const saved = await booking.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get bookings for logged-in user
export const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.userId }).populate("room");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Cancel a booking
export const cancelBooking = async (req, res) => {
  try {
    const deleted = await Booking.findOneAndDelete({
      _id: req.params.id,
      user: req.userId,
    });

    if (!deleted) {
      return res
        .status(404)
        .json({ error: "Booking not found or not authorized" });
    }

    res.json({ message: "Booking cancelled" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
