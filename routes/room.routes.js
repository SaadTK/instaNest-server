// routes/roomRoutes.js
import express from 'express';
import {
  createRoom,
  getAllRooms,
  getRoomById,
  updateRoom,
  deleteRoom,
} from '../controllers/roomController.js';

import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAllRooms);
router.get('/:id', getRoomById);
router.post('/', verifyToken, createRoom);
router.put('/:id', verifyToken, updateRoom);
router.delete('/:id', verifyToken, deleteRoom);

export default router;
