// controllers/bookingController.js
import Booking from "../models/Bookings.js";

// Create a booking
// export const createBooking = async (req, res) => {
//   try {
//     const booking = new Booking({ ...req.body, user: req.user.id });
//     const saved = await booking.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };
export const createBooking = async (req, res) => {
  try {
    const { room } = req.body;
    const userId = req.user.id;

    // Check if this room is already booked by ANY user
    const roomAlreadyBooked = await Booking.findOne({ room });
    if (roomAlreadyBooked) {
      return res.status(400).json({ error: "This room is already booked." });
    }

    // Optional: If you want to explicitly check if the user already booked this room (redundant if above is true)
    // const userAlreadyBookedRoom = await Booking.findOne({ room, user: userId });
    // if (userAlreadyBookedRoom) {
    //   return res.status(400).json({ error: "You have already booked this room." });
    // }

    // Create booking if no conflicts
    const booking = new Booking({ ...req.body, user: userId });
    const saved = await booking.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
// Get bookings for logged-in user
export const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate("room");
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
      user: req.user.id,
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
