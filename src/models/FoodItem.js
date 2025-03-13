import mongoose from 'mongoose';

const foodItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, maxlength: 3000 },
  quantity: { type: Number, required: true },
  type: { type: String, enum: ['VEGETARIAN', 'NON_VEGETARIAN'], required: true }
});

const FoodItem = mongoose.model('FoodItem', foodItemSchema);

module.exports = FoodItem;