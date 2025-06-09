const express = require('express');
const cors = require('cors');
require('dotenv').config();


const connectDB = require('./config/db.js');
const authRouter = require('./routes/auth.routes.js');
const scoreRouter = require('./routes/score.routes.js');

const app = express();

app.use(cors({
  origin: 'https://flipcard-game-1-0.netlify.app',
  credentials: true
}));

app.use(express.json());
app.options('*', cors()); // (optional) allow pre-flight

connectDB();

app.use('/api/auth', authRouter);
app.use('/api/scores', scoreRouter);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
