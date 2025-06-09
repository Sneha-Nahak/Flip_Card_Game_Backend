const express = require('express');
const {
  submitScore,
  getLeaderboard,
  getMyScores
} = require('../controllers/score.controller');

const authMiddleware = require('../middleware/auth.middleware');

const scoreRouter = express.Router();

scoreRouter.post('/', authMiddleware, submitScore);
scoreRouter.get('/leaderboard/:level', getLeaderboard);
scoreRouter.get('/me', authMiddleware, getMyScores);

module.exports = scoreRouter;
