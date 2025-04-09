# NoteStorageApp

This application allows a user to register, login, and then write notes which they can save. They can also mark a note to add it to their favorites before they save it. The user can view all their saved notes, and can search for a specific note based on the date it was created. The app makes use of a JSON server to act as a backend to store and confirm registered users and to store and retrieve notes saved.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## How to start the NoteStorage app

Start the JSON server 'backend' first (uses db.json file) that stores and retrieves data, with the command: json-server --watch db.json. This is hosted at http://localhost:3000/. 
Then run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Quick Guideline

Provide a Username and Password for an already existing account or proceed to the Register page to create a new login. Once logged in, the Home page will be loaded displaying three of the most recently created notes and three of the most recent notes to have been saved as a favorite. 
