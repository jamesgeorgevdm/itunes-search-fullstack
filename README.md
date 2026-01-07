# iTunes Search App

## Description

The iTunes Search App is a full-stack React + Express application that allows users to search for various types of media (movies, music, eBooks, etc.) available on the iTunes Store. Users can save their favourite items to a local list while browsing.

## Key Features

- **Search Media:** Search iTunes Store content by media type (movies, music, podcasts, TV shows, etc.)
- **Filter Results:** Narrow results by selecting a specific media type or view all results
- **Favourites List:** Add and remove items from a favourites list (non-persistent)
- **Clean UI:** Simple and user-friendly interface
- **JWT-protected API routes:** Backend routes secured using JSON Web Tokens

## Technologies Used

- **Front-end:** React, CSS
- **Back-end:** Node.js, Express
- **API:** iTunes Search API
- **Security:** JSON Web Tokens (JWT)
- **HTTP Requests:** Axios
- **Environment Configuration:** dotenv

## Architecture Overview

- Client–server architecture
- React frontend communicates with an Express REST API
- API routes protected using JWT middleware
- Server proxies requests to the iTunes Search API

## Security Notes

- JWTs are used to protect API routes
- Tokens are generated server-side and verified via middleware
- This project demonstrates route protection concepts rather than full user authentication

## Environment Variables

Create a `.env` file in the `server` directory based on `.env.example`:
SECRET_KEY=your_secret_key_here


## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation

1. Clone the repository
2. Install backend dependencies:
   cd server
   npm install

3. Create a `.env` file using `.env.example`
4. Start the backend:
   node server.js

5. Install frontend dependencies:
   cd ../client
   npm install

6. Start the frontend:
   npm start


## Usage Instructions

1. Enter a search term and select a media type
2. Click the **Search** button to fetch results from the iTunes API
3. Click **Add to Favourites** to save items locally
4. View or remove items from the favourites list

> This project was completed prior to being uploaded to GitHub as part of a portfolio.




