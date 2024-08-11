// src/JiraMyself.tsx
import React, { useState } from 'react';
import { fetchMyself } from './jiraService';
import { Version3Models } from 'jira.js';

const JiraMyself: React.FC = () => {
  const [userData, setUserData] = useState<Version3Models.User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchMyself = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchMyself();
      setUserData(data);
    } catch (err) {
      setError('Failed to fetch user data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Jira User Info</h1>
      <button onClick={handleFetchMyself}>Fetch User Info</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {userData && (
        <div>
          <h2>User Information:</h2>
          <p><strong>Name:</strong> {userData.displayName}</p>
          <p><strong>Email:</strong> {userData.emailAddress}</p>
          <p><strong>Timezone:</strong> {userData.timeZone}</p>
        </div>
      )}
    </div>
  );
};

export default JiraMyself;
