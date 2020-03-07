import {
  get,
  map,
  startCase,
} from 'lodash';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { getTopStoryArticles } from 'services/getTopStoryArticles';

function transformArticles(results) {
  return map(results, (result) => ({
    title: get(result, 'title'),
    abstract: get(result, 'abstract'),
    publishedDate: moment(get(result, 'published_date')).fromNow(),
    thumbnailUrl: get(result, ['multimedia', 0, 'url']),
    section: get(result, 'section') === 'us' ? 'US' : startCase(get(result, 'section')),
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
