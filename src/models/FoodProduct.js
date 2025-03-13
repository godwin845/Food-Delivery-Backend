import mongoose from 'mongoose';

const foodProductSchema = new mongoose.Schema({
    name: { type: String, required: true, maxlength: 255 },
    totalPrice: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    availability: { type: Number, required: true },
    type: { type: String, enum: ['VEG', 'NON_VEG'], required: true },
    description: { type: String, maxlength: 3000 }
});

module.exports = mongoose.model('FoodProduct', foodProductSchema);