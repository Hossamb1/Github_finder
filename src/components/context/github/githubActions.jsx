import axios from "axios";
// Github Api's and tokens
const GITHUB_API = process.env.REACT_APP_GITHUB_API;

// axios extension for minimalizm
const github = axios.create({
  baseURL: GITHUB_API,
});

// Get user and repos
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};

// Searches the Github api
export async function searchUsers(text) {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await github.get(`/search/users?${params}`);

  return response.data.items;
}
