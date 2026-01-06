# **iTunes Search App**

## **Description**

The iTunes Search App is a React-Express application that allows users to search for various types of media (movies, music, eBooks, etc.) available on the iTunes Store. Users can save their favorite items to a local list while browsing.

## **Key Features**

- **Search Media:** Users can search iTunes Store content by media type (movies, music, podcasts, TV shows, etc.).
- **Filter Results:** Select a media type to narrow the search or choose "All" to see all results.
- **Favourites List:** Add and remove items from a favourites list. This list is temporary and does not persist after the app is closed.
- **Attractive UI:** The application features a clean and user-friendly interface.
- **Secure API:** The app uses JSON Web Tokens (JWT) to secure API communication.

## **Technologies Used**

- **Front-end:** React.js, CSS
- **Back-end:** Node.js, Express
- **API:** iTunes Search API
- **Security:** JSON Web Tokens (JWT)
- **HTTP Requests:** Axios
- **Styling:** CSS with custom styles
- **Environment Configuration:** dotenv

## **Setup Instructions**

Follow the steps below to set up the application on your local machine:

### **Prerequisites**

1. Install [Node.js](https://nodejs.org/) (ensure you have npm installed).

### **Installation**

1. **Download the folder containing files relating to this project**
   cd itunes-search-app

2. **Install dependencies with the following code**
   cd backend
   npm install
   cd ../frontend
   npm install

3. **Start the backend server**
   In the backend directory, input the code: node server.js

4. **Start the React front-end**
   In the frontend directory, input the code: npm start

## **Usage Instructions**

1. Use the search bar to enter a keyword and select a media type from the dropdown menu.
2. Click the "Search" button to fetch results from the iTunes API.
3. Browse the results, and clock "Add to Favourites" to save an item to your favourites list.
4. View or remove items from the favourites list on the right side of the screen.
