const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

// Define the '/chat' endpoint
app.post('/chat', async (req, res) => {
    try {
        // Extract user message from the request body
        const userMessage = req.body.message.trim();

        // Make request to the OpenAI API using axios
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: userMessage }],
            max_tokens: 50
        }, {
            headers: {
                'Authorization': 'Bearer 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',
                'Content-Type': 'application/json'
            }
        });

        // Log the response from the OpenAI API
        console.log('Response from OpenAI API:', response.data);

        // Check if the response from OpenAI API is valid
        if (!response.data || !Array.isArray(response.data.choices) || response.data.choices.length === 0) {
            throw new Error('Invalid response from OpenAI API');
        }

        // Extract bot response from the API response
        const botResponse = response.data.choices[0]?.message?.content?.trim();

        if (botResponse) {
            res.status(200).json({ message: botResponse });
        } else {
            throw new Error('Empty response content from OpenAI API');
        }
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
