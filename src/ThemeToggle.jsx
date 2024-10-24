import React from 'react';
import { useGlobalState } from './GlobalState';

const ThemeToggle = () => {
  const { state, toggleTheme } = useGlobalState();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 ${state.theme === 'light' ? 'bg-gray-200' : 'bg-gray-700 text-white'} rounded-md`}
    >
      {state.theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
};

export default ThemeToggle;
