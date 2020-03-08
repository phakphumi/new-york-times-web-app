import { useContentLoading } from '_contexts';
import { useArticles } from '_contexts/articlesHooks';
import { getTopStories } from '_services/topStoriesService';
import { transformArticlesFromTopStoriesAPI } from '_utils/articlesUtil';
import { get } from 'lodash';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

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

  const fetchTopStories = async () => {
    try {
      setContentIsLoading();
      const response = await getTopStories();
      updateArticles(
        transformArticlesFromTopStoriesAPI(get(response, ['data', 'results']))
      );
    } catch {
      history.push('/error');
    } finally {
      setContentIsNotLoading();
    }
  };

  useEffect(() => {
    if (!debouncedSearchTerm) {
      fetchTopStories();
    }
  }, [debouncedSearchTerm]);

  return {
    articles,
    debouncedSearchTerm,

    handleShowMoreBtnClick,
  };
}
