import mongoose from 'mongoose';

// FoodOrder Schema
const FoodOrderSchema = new mongoose.Schema({
  description: { type: String, required: true },
  totalCost: { type: Number, required: true },
  customer: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
  products: [{ type: Schema.Types.ObjectId, ref: 'FoodProduct' }]
});

const FoodOrder = mongoose.model('FoodOrder', FoodOrderSchema);

module.exports = FoodOrder;