const express = require('express');
const {
  submitScore,
  getLeaderboard,
  getMyScores
} = require('../controllers/score.controller');

const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/', authMiddleware, submitScore);
router.get('/leaderboard/:level', getLeaderboard);
router.get('/me', authMiddleware, getMyScores);

module.exports = router;
