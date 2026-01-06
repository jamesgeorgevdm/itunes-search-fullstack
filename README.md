# **iTunes Search App**

## **Description**

The iTunes Search App is a React-Express application that allows users to search for various types of media (movies, music, eBooks, etc.) available on the iTunes Store. Users can save their favorite items to a local list while browsing.

## **Key Features**

- **Search Media:** Users can search iTunes Store content by media type (movies, music, podcasts, TV shows, etc.).
- **Filter Results:** Select a media type to narrow the search or choose "All" to see all results.
- **Favourites List:** Add and remove items from a favourites list. This list is temporary and does not persist after the app is closed.
- **Attractive UI:** The application features a clean and user-friendly interface.
- **JWT-protected API routes:** The app uses JSON Web Tokens (JWT) to secure API communication.

## **Technologies Used**

- **Front-end:** React.js, CSS
- **Back-end:** Node.js, Express
- **API:** iTunes Search API
- **Security:** JSON Web Tokens (JWT)
- **HTTP Requests:** Axios
- **Styling:** CSS with custom styles
- **Environment Configuration:** dotenv

## **Architecture Overview**
- Client–server architecture
- React frontend communicates with an Express REST API
- API routes protected using JWT middleware
- Server proxies requests to the iTunes Search API

## **Security Notes**
- JWTs are used to protect API routes
- Tokens are generated server-side and verified via middleware
- This project demonstrates route protection concepts rather than full user authentication



## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation

1. Clone the repository
2. Install backend dependencies:
   cd server
   npm install

3. Create a `.env` file with the following code:

   SECRET_KEY=your_secret_key
   (Update "your_secret_key" with your own keyword)

4. Start the backend:
   node server.js

5. Install frontend dependencies:
   cd ../client
   npm install

6. Start the frontend:
   npm start

## **Usage Instructions**

1. Use the search bar to enter a keyword and select a media type from the dropdown menu.
2. Click the "Search" button to fetch results from the iTunes API.
3. Browse the results, and clock "Add to Favourites" to save an item to your favourites list.
4. View or remove items from the favourites list on the right side of the screen.

> This project was completed prior to being uploaded to GitHub as part of a portfolio.

