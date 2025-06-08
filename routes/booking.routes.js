// routes/bookingRoutes.js
import express from "express";
import {
  createBooking,
  getUserBookings,
  cancelBooking,
} from "../controllers/bookingController.js";

// import { verifyToken } from "../middleware/authMiddleware.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, createBooking);
router.get("/", verifyToken, getUserBookings);
router.delete("/:id", verifyToken, cancelBooking);

export default router;
