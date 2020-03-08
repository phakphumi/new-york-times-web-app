import { useContentLoading } from '_contexts';
import { useArticles } from '_contexts/articlesHooks';
import { getTopStoryArticles } from '_services/getTopStoryArticles';
import { transformArticlesFromTopStoriesAPI } from '_utils/articlesUtils';
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

  const getTopStories = async () => {
    try {
      setContentIsLoading();
      const response = await getTopStoryArticles();
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
      getTopStories();
    }
  }, [debouncedSearchTerm]);

  return {
    articles,
    debouncedSearchTerm,

    handleShowMoreBtnClick,
  };
}
