
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;

        console.log('AI request received:', message);

        if (!message || typeof message !== 'string' || !message.trim()) {
            return res.status(400).json({
                error: 'Please enter a message.'
            });
        }

        if (!process.env.GROQ_API_KEY) {
            return res.status(500).json({
                error: 'Groq API key is missing.'
            });
        }

        const { default: Groq } = await import('groq-sdk');

        const groq = new Groq({
            apiKey: process.env.GROQ_API_KEY
        });

        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content: `
You are SkillPath AI, a personal learning mentor.

Student skills: Python, SQL, HTML, CSS.
Career goal: Full Stack Developer.
Education: First-year M.Sc. AI and Data Science.

Give simple beginner-friendly answers.
Use simple English and bullet points.
Keep answers practical and helpful.
`
                },
                {
                    role: 'user',
                    content: message.trim()
                }
            ],

            model: 'openai/gpt-oss-120b',
            temperature: 0.3,
            max_tokens: 500
        });

        const reply = completion.choices[0]?.message?.content;

        if (!reply) {
            throw new Error('Empty AI response received.');
        }

        console.log('Groq AI response successful!');

        return res.json({ reply });

    } catch (error) {
        console.error('GROQ ERROR:', error);

        return res.status(500).json({
            error: error.message || 'Groq AI response failed.'
        });
    }
});

const PORT = 5000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB Connected Successfully!');

        app.listen(PORT, () => {
            console.log(`SkillPath AI Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('MongoDB Connection Error:', error.message);
    });