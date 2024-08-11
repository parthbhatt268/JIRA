// src/JiraIssues.js
import React, { useState } from 'react';
import { fetchIssues } from './AxiosJiraService';

const JiraIssues = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchIssues();
      setIssues(data);
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Jira Issues</h1>
      <button onClick={handleFetchData}>Fetch Data</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {issues.length > 0 && (
        <ul>
          {issues.map((issue) => (
            <li key={issue.id}>
              {issue.key}: {issue.fields.summary}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JiraIssues;
