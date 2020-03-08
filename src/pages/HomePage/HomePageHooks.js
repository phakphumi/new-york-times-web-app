import { ARTICLE_URI_PREFIX } from '_constants';
import { useContentLoading } from '_contexts';
import { useArticles } from '_contexts/articlesHooks';
import { getTopStoryArticles } from '_services/getTopStoryArticles';
import {
  get,
  map,
  replace,
  startCase,
} from 'lodash';
import moment from 'moment';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function transformArticles(results) {
  return map(results, (result) => ({
    title: get(result, 'title'),
    abstract: get(result, 'abstract'),
    publishedDate: moment(get(result, 'published_date')).fromNow(),
    thumbnailUrl: get(result, ['multimedia', 0, 'url']),
    section: get(result, 'section') === 'us' ? 'US' : startCase(get(result, 'section')),
    articleId: replace(get(result, 'uri'), ARTICLE_URI_PREFIX, ''),
  }));
}

export function useHomePage() {
  const history = useHistory();
  const {
    setContentIsLoading,
    setContentIsNotLoading,
  } = useContentLoading();
  const {
    articles,
    search: { debouncedTerm: debouncedSearchTerm },
    increaseCurrentPageSearch,
    updateArticles,
  } = useArticles();

  const handleShowMoreBtnClick = () => {
    increaseCurrentPageSearch();
  };

  const getTopStories = async () => {
    try {
      setContentIsLoading();
      const response = await getTopStoryArticles();
      updateArticles(
        transformArticles(get(response, ['data', 'results']))
      );
    } catch {
      history.push('/error');
    } finally {
      setContentIsNotLoading();
    }
  };

  useEffect(() => {
    if (!debouncedSearchTerm) {
      getTopStories();
    }
  }, [debouncedSearchTerm]);

  return {
    articles,
    debouncedSearchTerm,

    handleShowMoreBtnClick,
  };
}
