import {
  useCallback,
  useContext,
} from 'react';

import {
  ACTION_TYPE,
  StateContext,
} from './StateProvider';

export function useArticles() {
  const [{ articles }, dispatch] = useContext(StateContext);

  return {
    articles: articles.data,
    search: { ...articles.search },
    updateArticles: useCallback(
      (transformedArticles) => dispatch({
        type: ACTION_TYPE.UPDATE_ARTICLES,
        data: transformedArticles,
      }),
      [dispatch]
    ),
    appendArticles: useCallback(
      (transformedArticles) => dispatch({
        type: ACTION_TYPE.UPDATE_ARTICLES,
        data: [
          ...articles.data,
          ...transformedArticles,
        ],
      }),
      [dispatch, articles.data]
    ),
    setDebouncedSearchTerm: useCallback(
      (debouncedTerm) => {
        if (debouncedTerm) {
          dispatch({
            type: ACTION_TYPE.UPDATE_ARTICLES_SEARCH,
            debouncedTerm,
          });
        } else {
          dispatch({
            type: ACTION_TYPE.UPDATE_ARTICLES_SEARCH,
            debouncedTerm,
            currentPage: 0,
          });
        }
      }

    ),
    increaseCurrentPageSearch: useCallback(
      () => dispatch({
        type: ACTION_TYPE.UPDATE_ARTICLES_SEARCH,
        currentPage: articles.search.currentPage + 1,
      })
    ),
  };
}
