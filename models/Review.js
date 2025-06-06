import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
  comment: String,
  rating: Number,
}, { timestamps: true });

export default mongoose.model('Review', reviewSchema);
