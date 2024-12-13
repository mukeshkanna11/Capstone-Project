const express = require('express');
const { getAllAgents, addAgent } = require('../controllers/agentController');
const router = express.Router();

router.get('/', getAllAgents);
router.post('/', addAgent);

module.exports = router;
