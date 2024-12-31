const Agent = require('../models/Agent'); // Assuming you have an Agent model

// Get all agents
const getAllAgents = async (req, res) => {
    try {
        const agents = await Agent.find(); // Fetch all agents from the database
        res.status(200).json(agents); // Send the agents as JSON
    } catch (err) {
        res.status(500).json({
            error: 'Failed to fetch agents',
            details: err.message || 'An error occurred while fetching the agents.',
        });
    }
};

// Get a specific agent by ID
const getAgentById = async (req, res) => {
    try {
        const agent = await Agent.findById(req.params.id); // Find the agent by ID
        if (!agent) {
            return res.status(404).json({ error: 'Agent not found' }); // If agent not found
        }
        res.status(200).json(agent); // Send the agent details
    } catch (err) {
        res.status(500).json({
            error: 'Failed to fetch agent',
            details: err.message || 'An error occurred while fetching the agent.',
        });
    }
};

// Add a new agent
const addAgent = async (req, res) => {
    try {
        // Check if required fields are provided
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required' });
        }

        // Create a new agent using the request body
        const newAgent = new Agent(req.body);
        await newAgent.save(); // Save the agent to the database
        res.status(201).json(newAgent); // Respond with the newly created agent
    } catch (err) {
        res.status(400).json({
            error: 'Failed to add agent',
            details: err.message || 'An error occurred while adding the agent.',
        });
    }
};

// Update an existing agent
const updateAgent = async (req, res) => {
    try {
        // Validate that required fields are present
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required to update' });
        }

        // Update the agent by ID
        const updatedAgent = await Agent.findByIdAndUpdate(req.params.id, req.body, {
            new: true, // Return the updated agent
            runValidators: true, // Ensure validators are run during the update
        });

        // If agent is not found, return 404
        if (!updatedAgent) {
            return res.status(404).json({ error: 'Agent not found' });
        }

        // Respond with the updated agent
        res.status(200).json(updatedAgent);
    } catch (err) {
        res.status(400).json({
            error: 'Failed to update agent',
            details: err.message || 'An error occurred while updating the agent.',
        });
    }
};

// Delete an agent
const deleteAgent = async (req, res) => {
    try {
        // Attempt to delete the agent by ID
        const deletedAgent = await Agent.findByIdAndDelete(req.params.id);

        // If agent not found, return 404
        if (!deletedAgent) {
            return res.status(404).json({ error: 'Agent not found' });
        }

        // Send success response
        res.status(200).json({ message: 'Agent deleted successfully' });
    } catch (err) {
        res.status(500).json({
            error: 'Failed to delete agent',
            details: err.message || 'An error occurred while deleting the agent.',
        });
    }
};

module.exports = {
    getAllAgents,
    getAgentById,
    addAgent,
    updateAgent,
    deleteAgent,
};
