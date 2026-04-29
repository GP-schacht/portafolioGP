import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ProjectDetail = ({ githubUsername, repoName }) => {
  const [repoData, setRepoData] = useState(null);
  const [readme, setReadme] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepoData = async () => {
      setLoading(true);
      setError(null);

      try {
        const repoRes = await fetch(
          `https://api.github.com/repos/${githubUsername}/${repoName}`
        );
        
        if (!repoRes.ok) {
          throw new Error(repoRes.status === 404 ? 'Repository not found' : 'Failed to fetch repository');
        }

        const repoJson = await repoRes.json();
        setRepoData(repoJson);

        const readmeRes = await fetch(
          `https://api.github.com/repos/${githubUsername}/${repoName}/readme`,
          { headers: { Accept: 'application/vnd.github.raw' } }
        );

        if (readmeRes.ok) {
          const readmeText = await readmeRes.text();
          setReadme(readmeText);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (githubUsername && repoName) {
      fetchRepoData();
    }
  }, [githubUsername, repoName]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num?.toString() || '0';
  };

  if (!githubUsername || !repoName) {
    return (
      <div className="project-detail">
        <div className="error-state">
          <h2>Invalid Configuration</h2>
          <p>Please provide both githubUsername and repoName props.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="project-detail">
        <div className="loading-skeleton">
          <div className="skeleton-hero">
            <div className="skeleton skeleton-title"></div>
            <div className="skeleton skeleton-description"></div>
            <div className="skeleton-stats">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="skeleton skeleton-badge"></div>
              ))}
            </div>
          </div>
          <div className="skeleton-content">
            <div className="skeleton skeleton-line"></div>
            <div className="skeleton skeleton-line"></div>
            <div className="skeleton skeleton-line short"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="project-detail">
        <div className="error-state">
          <h2>Error Loading Repository</h2>
          <p>{error}</p>
          <p className="error-hint">Make sure the repository exists and is public.</p>
        </div>
      </div>
    );
  }

  const techStack = [];
  if (repoData?.language) techStack.push(repoData.language);
  if (repoData?.topics) techStack.push(...repoData.topics.slice(0, 5));

  return (
    <div className="project-detail">
      <div className="hero-section">
        <h1 className="repo-name">{repoData.name}</h1>
        <p className="repo-description">{repoData.description || 'No description provided'}</p>
        
        <div className="stats-badges">
          <span className="stat-badge">
            <svg viewBox="0 0 16 16" width="16" height="16">
              <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z"/>
            </svg>
            {formatNumber(repoData.stargazers_count)}
          </span>
          <span className="stat-badge">
            <svg viewBox="0 0 16 16" width="16" height="16">
              <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a.75.75 0 0 1 1.5 0v.878a.75.75 0 0 0 .75.75h4.5A.75.75 0 0 0 14 6.28v-.878a.75.75 0 0 1-1.5 0v-.878c0-.414-.336-.75-.75-.75h-4.5A.75.75 0 0 0 6 3.403v.878a.75.75 0 0 1-1.5 0z"/>
            </svg>
            {formatNumber(repoData.forks_count)}
          </span>
          <span className="stat-badge">
            <svg viewBox="0 0 16 16" width="16" height="16">
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z"/>
            </svg>
            {repoData.language || 'N/A'}
          </span>
          <span className="stat-badge">
            <svg viewBox="0 0 16 16" width="16" height="16">
              <path d="M8 0a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
            </svg>
            {formatNumber(repoData.open_issues_count)}
          </span>
          <span className="stat-badge">
            <svg viewBox="0 0 16 16" width="16" height="16">
              <path d="M11.28 6.78a.75.75 0 0 0-1.06-1.06l-4.25 4.25a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06l-3.69-3.69h7.44V9.06h-7.44l3.69-3.69z"/>
            </svg>
            {formatDate(repoData.updated_at)}
          </span>
        </div>

        <a
          href={repoData.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-link"
        >
          View on GitHub
          <svg viewBox="0 0 16 16" width="14" height="14">
            <path d="M9.28 6.28a.75.75 0 0 0-1.06-1.06l-4.25 4.25a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06l-3.69-3.69H14.5V9.06h-7.44l3.69-3.69zM2 8a1 1 0 0 1 1-1h9.5a1 1 0 0 1 1 1v5.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8z"/>
          </svg>
        </a>
      </div>

      {techStack.length > 0 && (
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      )}

      <div className="readme-content">
        {readme ? (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              }
            }}
          >
            {readme}
          </ReactMarkdown>
        ) : (
          <div className="no-readme">
            <p>No README.md found for this repository.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;