# Character Creator


#### By Reid Ashwill 

## Description
This app is my capstone for Epicodus' full stack web development program.

In my experience, one of the biggest barriers to entry that new Dungeons and Dragons players face is the character creation process.  I aim to lower this barrier by creating an app that takes care of all the hard parts for you!

This project is the first portion of a larger project that i aim to launch by the end of the year.  Once functionality is in  place to create random characters and share favorites, I will continue to write more RPG toolkit apps that will all be available as one web app.  I would also like to port it over to either React Native or Flutter so it can be made available as a native app on iOS and Android devices.

At this point the entire codebase was written by myself, but I would love to opportunity to work with other developers that would like to contribute to this as an open source project.


## Specs


## Completed User Stories

As a user I want to be able to be able to sign up for an account.

As a user I want to be able to sign in to my account to use the site.

As a signed in user I want to be able to create 1st level D&D Characters.

As a signed in user I want to be able to view all of my previously created characters in a list.

As a signed in user I want to be able to click on any of my previously created characters to see the full character sheet.

As a signed in user I want to be able to delete any of my previously created characters.


## User Stories to be fulfilled in later versions

As a signed in user I want to be able to create Characters of any level.

As a signed in user I want to be able to create a randomly generated character.

As a signed in user I want to be able to 'share' my favorite characters with other users.


## Setup/Installation Requirements
Requires [Node.js](https://nodejs.org/en/)

In your browser of choice navigate to https://github.com/reidashwill/character-generator to see the entire codebase.

Clone this repository to your local environment, and navigate to it via the terminal.
Run the command 'npm install'.
Run the command 'npm start' to start a local development server (most likely on port 3000)
In your browser of choice, navigate to localhost:3000 (or whichever port the server was started on)

Or the app can be viewed live here: https://character-generator-761c8.firebaseapp.com/




## Known Bugs
This is an early build, and as such it is not perfect.  If you notice something that needs to be addressed, please put in a ticket here: https://github.com/reidashwill/character-generator/issues

Currently the home button is currently only able to navigate to the main page of the site regardless of its state, so while you might expect to be brought back to the splash screen / character list when clicking on home, unless you are on the account page nothing will happen.  The workaround to this is currently buttons coded into the individual components.  This is not a very elegent solution, but it is a suitable crutch for the time being.

There is currently no media query in place for mobile viewing.  The site will render and function on most mobile devices, but is not visually appealing at all.


## Technologies Used

* _JavaScript_
* _React_
* _Firestore_

### License

*Licensed under the MIT license*

Copyright (c) 2020 **_Reid Ashwill_**