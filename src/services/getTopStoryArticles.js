import axios from 'axios';

const HOME_PAGE_API_URL = 'https://api.nytimes.com/svc/topstories/v2/home.json';
const NYTIMES_API_KEY = '5W2RAEaPRU1Fu4dGH5wj9wIb4ozZn5BC';

export function getTopStoryArticles() {
  return axios.get(
    HOME_PAGE_API_URL,
    {
      params: {
        'api-key': NYTIMES_API_KEY,
      },
    }
  );
}
