import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
import User from './models/User.js';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
// const token = jwt.sign({ userId: 123 }, JWT_SECRET, { expiresIn: '1h' });
const MONGO_URI = 'mongodb://localhost:27017/ramadb'; // Replace with your MongoDB connection URI

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error(err));

// Signup Route
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });

    try {
        await newUser.save();
        const token = jwt.sign({ userId: newUser._id }, JWT_SECRET);
        res.json({ token, message: 'User registered successfully!' });
    } catch (error) {
        res.status(400).json({ error: 'User registration failed!' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
