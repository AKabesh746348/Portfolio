import React, { useEffect, useState, useRef } from 'react';

const GITHUB_USER = 'AKabesh746348';
const CHAT_API = process.env.REACT_APP_CHAT_API || 'http://localhost:5002/chat';
const EXCLUDE_REPOS = ['TextLens'];

export function GitHubProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=6`)
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data.filter(r => !r.fork && !EXCLUDE_REPOS.includes(r.name)));
        } else {
          setError('Could not load repos.');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Could not load repos.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="body-text">Loading projects…</p>;
  if (error) return <p className="body-text">{error}</p>;
  if (repos.length === 0) return <p className="body-text">No public repositories found.</p>;

  return (
    <div className="github-projects-grid">
      {repos.map(repo => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div className="project-card-header">
            <span className="project-name">{repo.name}</span>
            {repo.language && <span className="project-lang">{repo.language}</span>}
          </div>
          {repo.description && (
            <p className="project-desc">{repo.description}</p>
          )}
          <div className="project-meta">
            <span>★ {repo.stargazers_count}</span>
            <span>⑂ {repo.forks_count}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

export function AskMeBot() {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hi! I'm an AI assistant trained on Abesh's profile. Ask me anything about him!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text }]);
    setLoading(true);
    try {
      const res = await fetch(CHAT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', text: data.reply || 'No response.' }]);
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', text: 'Sorry, the chat service is offline right now.' }
      ]);
    }
    setLoading(false);
  };

  const handleKey = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-messages">
        {messages.map((m, i) => (
          <div key={i} className={`chat-bubble ${m.role}`}>
            {m.text}
          </div>
        ))}
        {loading && (
          <div className="chat-bubble assistant typing">
            <span></span><span></span><span></span>
          </div>
        )}
        <div ref={bottomRef} />
      </div>
      <div className="chat-input-row">
        <input
          className="chat-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Ask me about Abesh…"
          disabled={loading}
        />
        <button
          className="chat-send-btn"
          onClick={send}
          disabled={loading || !input.trim()}
        >
          Send
        </button>
      </div>
    </div>
  );
}
