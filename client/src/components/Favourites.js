import React from "react";
import "./Favourites.css";

// Component to display the user's favourites list
const Favourites = ({ favourites, removeFavourite }) => (
  <div className="favourites-container">
    <h2>Your Favourites</h2>
    {favourites.length > 0 ? (
      <ul>
        {favourites.map((item) => (
          <li key={item.trackId} className="favourite-item">
            <img src={item.artworkUrl100} alt={item.trackName} />
            <h3>{item.trackName}</h3>
            <p>{item.artistName}</p>
            <button onClick={() => removeFavourite(item.trackId)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    ) : (
      // Display when no favourites are added
      <p className="favourites-empty">No favourites added yet.</p>
    )}
  </div>
);

export default Favourites;
