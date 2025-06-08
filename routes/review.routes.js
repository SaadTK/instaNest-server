import express from "express";
import {
  postReview,
  getReviewsByRoom,
} from "../controllers/reviewController.js";
// import verifyUser from "../middlewares/authMiddleware.js";
import { verifyToken } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/rooms/:roomId/reviews", verifyToken, postReview);
router.get("/rooms/:roomId/reviews", getReviewsByRoom);

export default router;
