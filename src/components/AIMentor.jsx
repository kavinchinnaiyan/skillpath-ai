
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
    Bot,
    Send,
    User,
    Sparkles
} from 'lucide-react';

function AIMentor() {

    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const [chat, setChat] = useState([
        {
            sender: 'ai',
            text: 'Hello Kavin! 👋 I am your SkillPath AI Mentor. I can help you with programming, career guidance, and learning plans. What would you like to learn today?'
        }
    ]);

    const suggestions = [
        'How can I become a Full Stack Developer?',
        'What should I learn after HTML and CSS?',
        'Give me a JavaScript learning plan.',
        'How can I improve my programming skills?'
    ];

    async function sendMessage(text = message) {

        const userMessage = text.trim();

        if (!userMessage || loading) return;

        setChat((previous) => [
            ...previous,
            {
                sender: 'user',
                text: userMessage
            }
        ]);

        setMessage('');
        setLoading(true);

        try {

            const response = await fetch(
                'http://localhost:5000/api/chat',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        message: userMessage
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'AI response failed');
            }

            setChat((previous) => [
                ...previous,
                {
                    sender: 'ai',
                    text: data.reply
                }
            ]);

        } catch (error) {

            console.error('Chat Error:', error);

            setChat((previous) => [
                ...previous,
                {
                    sender: 'ai',
                    text: 'Sorry! I could not connect to the AI. Please check whether the backend server is running and try again.'
                }
            ]);

        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="mentor-page">

            <header className="mentor-header">
                <div>
                    <h1>AI Mentor</h1>
                    <p>Your personal learning assistant.</p>
                </div>

                <Bot size={38} color="#7965e8" />
            </header>

            <div className="mentor-welcome">
                <Sparkles size={28} />

                <div>
                    <h2>Welcome to SkillPath AI Mentor!</h2>
                    <p>Ask questions and explore your learning journey.</p>
                </div>
            </div>

            <div className="mentor-chat-box">

                <div className="chat-messages">

                    {chat.map((item, index) => (
                        <div
                            className={`chat-message ${item.sender}`}
                            key={index}
                        >

                            <div className="chat-avatar">
                                {item.sender === 'ai' ? (
                                    <Bot size={19} />
                                ) : (
                                    <User size={19} />
                                )}
                            </div>

                            <div className="chat-text">
                                {item.sender === 'ai' ? (
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                        {item.text}
                                    </ReactMarkdown>
                                ) : (
                                    item.text
                                )}
                            </div>

                        </div>
                    ))}

                    {loading && (
                        <div className="chat-message ai">
                            <div className="chat-avatar">
                                <Bot size={19} />
                            </div>

                            <div className="chat-text">
                                AI Mentor is thinking...
                            </div>
                        </div>
                    )}

                </div>

                <div className="mentor-suggestions">

                    <h3>Suggested Questions</h3>

                    {suggestions.map((question) => (
                        <button
                            key={question}
                            disabled={loading}
                            onClick={() => sendMessage(question)}
                        >
                            {question}
                        </button>
                    ))}

                </div>

                <div className="mentor-input-row">

                    <input
                        type="text"
                        placeholder="Ask your AI Mentor..."
                        value={message}
                        disabled={loading}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                sendMessage();
                            }
                        }}
                    />

                    <button
                        onClick={() => sendMessage()}
                        disabled={!message.trim() || loading}
                    >
                        <Send size={19} />
                    </button>

                </div>

            </div>

        </div>
    );
}

export default AIMentor;
