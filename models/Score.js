const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  playerName: String,
  moves: Number,
  timeTaken: Number,
  level: { type: String, enum: ['easy', 'medium', 'hard'] },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Score', scoreSchema);
