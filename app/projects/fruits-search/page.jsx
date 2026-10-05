"use client";
import React, { useState, useEffect } from 'react';
import "./style.css";

export default function FruitsSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searchedQuery, setSearchedQuery] = useState('');

  const hasQuery = query.trim() !== '';
  // "No results" показуємо тільки коли відповідь саме на цей запит уже прийшла
  const isSearchDone = hasQuery && searchedQuery === query;

  function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    if (query.trim() === '') {
      return;
    }
    const timeoutId = setTimeout(async () => {
      try {
        const response = await fetch(`https://fruit-search.freecodecamp.rocks/api/fruits?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        setResults(data.map(fruit => fruit.name));
      } catch (error) {
        console.error("Error fetching data:", error);
        setResults([]);
      }
      // запам'ятовуємо, для якого запиту прийшла відповідь
      setSearchedQuery(query);
    }, 700);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div className="fruits-search-project">
      <div id="search-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search-input">Search for fruits:</label>
          <input
            id="search-input"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a fruit name (e.g. Apple, Banana)..."
          />
        </form>
        <div id="results">
          {hasQuery && results.length > 0 ? (
            results.map(item => (
              <p key={item} className="result-item">{item}</p>
            ))
          ) : (
            isSearchDone && <p className="no-results">No results found</p>
          )}
        </div>
      </div>
    </div>
  );
}
