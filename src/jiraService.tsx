// src/jiraService.js
import { Version3Client } from 'jira.js';


const JIRA_HOST = 'https://asd';

const JIRA_EMAIL = 'asd.@asd';
const JIRA_API_TOKEN = 'asd';

// Create Jira client
export const createJiraClient = (): Version3Client => {
  try {
    const client = new Version3Client({
      host: JIRA_HOST,
      authentication: {
        basic: {
          email: JIRA_EMAIL,
          apiToken: JIRA_API_TOKEN,
        },
      },
    });

    console.log('Jira client created:', client);
    return client;
  } catch (error) {
    console.error('Error creating Jira client:', error);
    throw error;
  }
};

// Fetch the current user's details
export const fetchMyself = async (): Promise<Version3Models.User> => {
  const client = createJiraClient();
  try {
    const response = await client.myself.getMyself();
    console.log('Myself response:', response);
    return response;
  } catch (error) {
    console.error('Error fetching myself:', error);
    throw error;
  }
};