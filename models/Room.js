import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  amenities: [String],
  rating: { type: Number, default: 0 },
  location: String,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
}, { timestamps: true });

export default mongoose.model('Room', roomSchema);
