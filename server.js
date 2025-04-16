import express from 'express';
import dotenv from 'dotenv';
import { Sequelize, DataTypes } from 'sequelize';
import cors from 'cors';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import morgan from 'morgan';
import helmet from 'helmet';
import session from 'express-session';

dotenv.config();

const sequelize = new Sequelize('Food Delivery Website', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

const User = sequelize.define('User', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'j97387695@gmail.com',
    pass: 'xgzb nszi qavr wnip',
  },
});

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    res.status(401).json({ message: 'Access denied. No token provided.' });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next(); 
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

app.use(session({
  secret: process.env.SESSION_SECRET || 'ghshqd',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  },
}));

sequelize.sync()
  .then(() => console.log('Connected to MySQL'))
  .catch((err) => console.error('MySQL connection error:', err));


app.get('/api/auth/users', verifyToken, async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Error fetching users' });
  }
});

app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) throw new Error('Email already registered.');

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hashedPassword });

    const token = jwt.sign({ userId: newUser.id, email: newUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    req.session.user = { userId: newUser.id, email: newUser.email };

    res.status(201).json({ message: 'User registered successfully.', token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error('Invalid email or password.');

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new Error('Invalid email or password.');

    const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    req.session.user = { userId: user.id, email: user.email };

    res.status(200).json({ message: 'Login successful.', token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/auth/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Error during logout.' });
    }
    res.status(200).json({ message: 'Logged out successfully.' });
  });
});

app.post('/api/auth/reset-password', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(404).json({ message: 'User not found.' });
      return;
    }

    const resetToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const resetLink = `http://localhost:5000/reset-password/${resetToken}`;
    
    await transporter.sendMail({
      from: 'j97387695@gmail.com',
      to: email,
      subject: 'Password Reset Request',
      text: `To reset your password, click the following link: ${resetLink}`,
    });

    res.status(200).json({ message: 'Password reset link sent.', resetToken });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/auth/reset-password/:resetToken', async (req, res) => {
  const { newPassword } = req.body;
  const { resetToken } = req.params;

  try {
    const decoded = jwt.verify(resetToken, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.userId);
    if (!user) {
      res.status(404).json({ message: 'User not found.' });
      return;
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: 'Password successfully updated.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});