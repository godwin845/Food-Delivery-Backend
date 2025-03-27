import mongoose, { Schema } from 'mongoose';

export const Role = {
  STAFF: 'STAFF',
  CUSTOMER: 'CUSTOMER'
};

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: Number, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: Object.values(Role), required: true },
  foodOrders: [{ type: Schema.Types.ObjectId, ref: 'FoodOrder' }],
});

const User = mongoose.model('User', userSchema);

export default User;