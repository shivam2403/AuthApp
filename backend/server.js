import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import connectDB from './db/connectDB.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express(); // Create an express app
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => { // Use app.listen instead of server.listen
    connectDB();
    console.log("Server Running on port " + PORT);
});
