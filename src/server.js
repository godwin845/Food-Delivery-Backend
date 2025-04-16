import express from 'express';
import customerRoutes from './routes/customerRoutes.js';
import foodItemRoutes from './routes/foodItemRoutes.js';
import foodMenuRoutes from './routes/foodMenuRoutes.js';
import foodOrderRoutes from './routes/foodOrderRoutes.js';
import foodProductRoutes from './routes/foodProductRoutes.js';
import userRoutes from './routes/userRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';
import sequelize from './config/db.js';

dotenv.config();

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

// API Routes
app.use('/api', customerRoutes);
app.use('/api', foodItemRoutes);
app.use('/api', foodMenuRoutes);
app.use('/api/foodOrders', foodOrderRoutes);
app.use('/api/foodProducts', foodProductRoutes);
app.use('/api/foodProducts', userRoutes);

sequelize.sync({ force: false })  // Set to true to drop and recreate tables each time
  .then(() => {
    console.log('Connected to MYSQL!');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });