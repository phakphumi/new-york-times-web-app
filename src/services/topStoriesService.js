import {
  NYTIMES_API_KEY,
  TOP_STORY_API_URL,
} from '_constants';
import axios from 'axios';

export function getTopStories() {
  return axios.get(
    TOP_STORY_API_URL,
    {
      params: {
        'api-key': NYTIMES_API_KEY,
      },
    }
  );
}
