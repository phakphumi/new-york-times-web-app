import {
  HOME_PAGE_API_URL,
  NYTIMES_API_KEY,
} from '_constants';
import axios from 'axios';

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
