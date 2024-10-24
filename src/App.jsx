import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import Favorites from './Favorites';
import { useGlobalState } from './GlobalState';

function App() {
  const { state } = useGlobalState();

  return (
    <Router>
      <div className={`${state.theme === 'dark' ? 'dark' : ''} min-h-screen flex flex-col`}>
        <div className="bg-white dark:bg-gray-900 text-black dark:text-white flex-grow">
          <Header />
          <main className="flex-grow">
            <SearchBar />
            <Routes>
              <Route path="/" element={<MovieList />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
              <Route path="/favorites" element={<Favorites />} />
              {/* Add more routes as necessary */}
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
