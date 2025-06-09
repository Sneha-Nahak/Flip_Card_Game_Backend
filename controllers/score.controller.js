const Score = require('../models/Score');

// POST /api/scores - submit a score
exports.submitScore = async (req, res) => {
  const { level, moves, timeTaken } = req.body;
  const { id: userId, username } = req.user;

  try {
    const score = new Score({ userId, playerName: username, level, moves, timeTaken });
    await score.save();
    res.status(201).json({ message: 'Score submitted', score });
  } catch (err) {
    res.status(500).json({ message: 'Failed to submit score', error: err.message });
  }
};

// GET /api/scores/leaderboard/:level - top 10 scores for a level
exports.getLeaderboard = async (req, res) => {
  const { level } = req.params;
  try {
    const scores = await Score.find({ level })
      .sort({ moves: 1, timeTaken: 1 }) // Lower moves & timeTaken better
      .limit(10);
    res.json(scores);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch leaderboard', error: err.message });
  }
};

// GET /api/scores/me - get all scores by logged-in user
exports.getMyScores = async (req, res) => {
  try {
    const scores = await Score.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(scores);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch your scores', error: err.message });
  }
};