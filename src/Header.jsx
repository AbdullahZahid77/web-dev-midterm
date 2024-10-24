import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalState } from './GlobalState'; //  global state

function Header() {
  const { toggleTheme, state } = useGlobalState();

  return (
    <header className="p-4 bg-blue-500 text-white">
      <h1 className="text-lg font-bold">Movie Explorer</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/favorites" className="hover:underline">Favorites</Link>
          </li>
          <li>
          <Link to="/films">Films</Link>

          </li>

        </ul>
      </nav>
      <button
        onClick={toggleTheme}
        className="ml-4 bg-gray-800 text-white p-2 rounded"
      >
        Toggle Background Color
      </button>
    </header>
  );
}

export default Header;
