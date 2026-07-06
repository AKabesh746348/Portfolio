import React, { useEffect, useState } from 'react';

const GITHUB_USER = 'AKabesh746348';
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
