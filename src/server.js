import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import customerRoutes from './routes/customerRoutes.js';
import foodItemRoutes from './routes/foodItemRoutes.js';
import foodMenuRoutes from './routes/foodMenuRoutes.js';
import foodOrderRoutes from './routes/foodOrderRoutes.js';
import foodProductRoutes from './routes/foodProductRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const port = 5000;

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// API Routes
app.use('/api', customerRoutes);
app.use('/api', foodItemRoutes);
app.use('/api', foodMenuRoutes);
app.use('/api/foodOrders', foodOrderRoutes);
app.use('/api/foodProducts', foodProductRoutes);
app.use('/api/foodProducts', userRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});