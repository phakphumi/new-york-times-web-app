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
    search: { ...articles.data.search },
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
          transformedArticles,
        ],
      }),
      [dispatch, articles.data]
    ),
  };
}
