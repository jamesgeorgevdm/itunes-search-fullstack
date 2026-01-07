import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Favourites from "./components/Favourites";
import "./App.css";

const App = () => {
  const [favourites, setFavourites] = useState([]);
  const [allResults, setAllResults] = useState([]);
  const [visibleResults, setVisibleResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [mediaType, setMediaType] = useState("all");
  const [token, setToken] = useState("");
  const [noResults, setNoResults] = useState(false);

  const RESULTS_PER_PAGE = 6;
  const API_URL = process.env.REACT_APP_API_URL; // from client/.env

  // Fetch JWT token on mount
  useEffect(() => {
    axios
      .get(`${API_URL}/auth/token`)
      .then((res) => setToken(res.data.token))
      .catch((err) => console.error("Error fetching token:", err));
  }, [API_URL]);

  // Add/remove favourites
  const addFavourite = (item) => setFavourites([...favourites, item]);
  const removeFavourite = (id) =>
    setFavourites(favourites.filter((item) => item.trackId !== id));

  // Handle iTunes search
  const handleSearch = (query, media) => {
    const safeQuery = query?.trim() || "";

    if (!safeQuery) {
      setAllResults([]);
      setVisibleResults([]);
      setCurrentPage(1);
      setNoResults(false);
      return;
    }

    axios
      .post(
        `${API_URL}/itunes`,
        { term: safeQuery, media },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        const results = res.data;
        setAllResults(results);
        setVisibleResults(results.slice(0, RESULTS_PER_PAGE));
        setCurrentPage(1);
        setNoResults(results.length === 0);
      })
      .catch((err) => console.error("Error fetching search results:", err));
  };

  // Load more results
  const handleShowMore = () => {
    const newPage = currentPage + 1;
    setVisibleResults((prev) => [
      ...prev,
      ...allResults.slice(
        currentPage * RESULTS_PER_PAGE,
        newPage * RESULTS_PER_PAGE
      ),
    ]);
    setCurrentPage(newPage);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">iTunes Search App</h1>
      <div className="main-content">
        <Search
          query={query}
          mediaType={mediaType}
          onSearch={(e) => setQuery(e.target.value || "")}
          onMediaTypeChange={(e) => setMediaType(e.target.value)}
          onSearchButtonClick={() => handleSearch(query, mediaType)}
        />

        <div className="results-list">
          {noResults && <p className="no-results-message">No results found.</p>}

          {visibleResults.map((item) => (
            <div key={item.trackId} className="result-item">
              <img src={item.artworkUrl100} alt={item.trackName} />
              <div>
                <h3>{item.trackName}</h3>
                <p>{item.artistName}</p>
                <button onClick={() => addFavourite(item)}>
                  Add to Favourites
                </button>
              </div>
            </div>
          ))}

          {visibleResults.length < allResults.length && !noResults && (
            <button onClick={handleShowMore} className="show-more-btn">
              Show More
            </button>
          )}
        </div>

        <Favourites favourites={favourites} removeFavourite={removeFavourite} />
      </div>
    </div>
  );
};

export default App;
