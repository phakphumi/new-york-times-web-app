import {
  get,
  map,
} from 'lodash';
import { useEffect, useState } from 'react';
import { getTopStoryArticles } from 'services/getTopStoryArticles';

function transformArticles(results) {
  return map(results, (result) => ({
    title: get(result, 'title'),
    abstract: get(result, 'abstract'),
    publishedDate: get(result, 'published_date'),
    thumbnailUrl: get(result, ['multimedia', 0, 'url']),
  }));
}

export function useHomePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getTopStoryArticles();
      setArticles(
        transformArticles(get(response, ['data', 'results']))
      );
    })();
  }, []);
  console.log({ articles });
  return {
    articles,
  };
}
