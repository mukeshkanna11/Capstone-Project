const express = require('express');
const {
  getAllAgents,
  getAgentById,
  addAgent,
  updateAgent,
  deleteAgent,
} = require('../controllers/agentController');
const authMiddleware = require('../middleware/authMiddleware'); // Authentication middleware

const router = express.Router();

// Routes with Authentication Middleware

// Get all agents
router.get('/', authMiddleware, async (req, res, next) => {
  try {
    await getAllAgents(req, res, next);
  } catch (error) {
    next(error); // Forward errors to the error handler middleware
  }
});

// Get a specific agent by ID
router.get('/:id', authMiddleware, async (req, res, next) => {
  try {
    await getAgentById(req, res, next);
  } catch (error) {
    next(error);
  }
});

// Add a new agent
router.post('/', authMiddleware, async (req, res, next) => {
  try {
    await addAgent(req, res, next);
  } catch (error) {
    next(error);
  }
});

// Update an existing agent
router.put('/:id', authMiddleware, async (req, res, next) => {
  try {
    await updateAgent(req, res, next);
  } catch (error) {
    next(error);
  }
});

// Delete an agent
router.delete('/:id', authMiddleware, async (req, res, next) => {
  try {
    await deleteAgent(req, res, next);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
