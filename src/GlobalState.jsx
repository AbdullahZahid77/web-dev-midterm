import React, { createContext, useReducer, useContext } from 'react';

// Create the context
const GlobalStateContext = createContext();

// Action Types
const TOGGLE_THEME = 'TOGGLE_THEME';
const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

// Reducer function
const globalStateReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((movie) => movie.title !== action.payload.title),
      };
    default:
      return state;
  }
};

// Initial global state
const initialState = {
  theme: 'light', // light or dark
  favorites: [], // Array of favorite movies
};

// Context Provider Component
export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalStateReducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  const addFavorite = (movie) => {
    dispatch({ type: ADD_FAVORITE, payload: movie });
  };

  const removeFavorite = (movie) => {
    dispatch({ type: REMOVE_FAVORITE, payload: movie });
  };

  return (
    <GlobalStateContext.Provider value={{ state, toggleTheme, addFavorite, removeFavorite }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook for using the global state
export const useGlobalState = () => useContext(GlobalStateContext);
