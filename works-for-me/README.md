# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory(works-for-me), you can run:

### `npm start`

In the server directory(server), you can run:

### `npm start`

The server must be running to load the content on the FriendList component found in HomePage.js. Both the server and client should be running

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The database models are created in /server/models directory

The routes for sending requests to the corresponding models are found in these files.
event.js
users.js

the .env file directly connects the application to the mongoDB cluster with the needed data

In Calendar.jsx we create a FullCalendar and import events from a given email

The navbar used as the header for the application can be found in navbar.js

The page with the incomplete FindTime functionality is in FindTime.js

The HomePage.js has the friends list as well as the added events

The AddFriend.js file hold the form needed to add a friend. Only username is needed to be filled.
