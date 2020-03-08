import { node } from 'prop-types';
import React, {
  createContext,
  useReducer,
} from 'react';

export const StateContext = createContext();

export const ACTION_TYPE = {
  CONTENT_IS_LOADING: 'CONTENT_IS_LOADING',
  CONTENT_IS_NOT_LOADING: 'CONTENT_IS_NOT_LOADING',
  UPDATE_ARTICLES: 'UPDATE_ARTICLES',
};

const initialState = {
  isContentLoading: false,
  articles: {
    data: [],
    search: {
      isSearching: false,
      debouncedTerm: null,
      currentPage: 0,
    },
  },
};

function reducer(state, { type, ...restProps }) {
  switch (type) {
    case ACTION_TYPE.CONTENT_IS_LOADING: {
      return {
        ...state,
        isContentLoading: true,
      };
    }
    case ACTION_TYPE.CONTENT_IS_NOT_LOADING: {
      return {
        ...state,
        isContentLoading: false,
      };
    }
    case ACTION_TYPE.UPDATE_ARTICLES: {
      return {
        ...state,
        artiticles: {
          ...state.articles,
          restProps,
        },
      };
    }

    default: {
      return state;
    }
  }
}

function StateProvider({ children }) {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
}

StateProvider.propTypes = {
  children: node.isRequired,
};

export default StateProvider;
