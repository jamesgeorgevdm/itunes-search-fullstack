import React from "react";
import "./Search.css";

// Component for the search input and media type selection
const Search = ({
  query,
  mediaType,
  onSearch,
  onMediaTypeChange,
  onSearchButtonClick,
}) => {
  return (
    <div className="search-container">
      <input
        type="text"
        value={query || ""} // Ensure the input value is always a string
        onChange={onSearch}
        placeholder="Search iTunes"
        className="search-input"
      />
      <select
        value={mediaType}
        onChange={onMediaTypeChange}
        className="media-type-select"
      >
        {/* Options for media type */}
        <option value="all">All</option>
        <option value="movie">Movie</option>
        <option value="podcast">Podcast</option>
        <option value="music">Music</option>
        <option value="audiobook">Audiobook</option>
        <option value="shortFilm">Short Film</option>
        <option value="tvShow">TV Show</option>
        <option value="software">Software</option>
        <option value="ebook">eBook</option>
      </select>
      <button onClick={onSearchButtonClick} className="search-button">
        Search
      </button>
    </div>
  );
};

export default Search;
