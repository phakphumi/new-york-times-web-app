import {
  useCallback,
  useContext,
} from 'react';

import {
  ACTION_TYPE,
  StateContext,
} from './StateProvider';

export function useContentLoading() {
  const [{ isContentLoading }, dispatch] = useContext(StateContext);

  return {
    isContentLoading,
    setContentIsLoading: useCallback(
      () => dispatch({ type: ACTION_TYPE.CONTENT_IS_LOADING }),
      [dispatch]
    ),
    setContentIsNotLoading: useCallback(
      () => dispatch({ type: ACTION_TYPE.CONTENT_IS_NOT_LOADING }),
      [dispatch]
    ),
  };
}
