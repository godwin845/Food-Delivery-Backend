import mongoose from 'mongoose';

const foodMenuSchema = new mongoose.Schema({
  dishes: { type: String, enum: ['VEGETARIAN', 'NON_VEGETARIAN', 'VEGAN'], required: true },
  foodProducts: [{ type: Schema.Types.ObjectId, ref: 'FoodProduct' }]
});

const FoodMenu = mongoose.model('FoodMenu', foodMenuSchema);

module.exports = FoodMenu;