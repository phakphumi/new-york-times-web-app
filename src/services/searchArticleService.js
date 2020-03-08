import {
  ARTICLE_URI_PREFIX,
  NYTIMES_API_KEY,
  SEARCH_API_URL,
} from '_constants';
import axios from 'axios';

export function getArticleById(articleId) {
  return axios.get(
    SEARCH_API_URL,
    {
      params: {
        fq: `_id:("${ARTICLE_URI_PREFIX}${articleId}")`,
        'api-key': NYTIMES_API_KEY,
      },
    }
  );
}

export function getArticlesByTerm(searchTerm, sortBy, page = 0) {
  return axios.get(
    SEARCH_API_URL,
    {
      params: {
        page,
        q: searchTerm,
        sort: sortBy,
        fq: 'document_type:("article")',
        'api-key': NYTIMES_API_KEY,
      },
    }
  );
}

