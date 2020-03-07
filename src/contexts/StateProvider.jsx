import { node } from 'prop-types';
import React, {
  createContext,
  useReducer,
} from 'react';


export const StateContext = createContext();

export const ACTION_TYPE = {
  CONTENT_IS_LOADING: 'CONTENT_IS_LOADING',
  CONTENT_IS_NOT_LOADING: 'CONTENT_IS_NOT_LOADING',
};

const initialState = {
  isContentLoading: false,
};

function reducer(state, { type }) {
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
