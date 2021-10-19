# Requirement specification

## Purpose of the application

With the application users are able to keep track of the lessons they have held.
Users can log the duration, the date and different contents of the lessons.
There are ready-made option for the contents in the application. Users can also create contents by themselves.
Many registered users are able to use the application. They all have their unique list of lessons.
For UX purposes the application shows the current weather at it's login page.

## Users

In the beginning there is only one user role. It's possible that a test user role might be added later. It would 
be for testing functionality of the app without saving data to the database.


## User interface draft

The application consists of four different views.

<img src="https://raw.githubusercontent.com/ollipo/projectLessonApp/master/Documentation/user_interface_draft.png" width="750">

The application opens to a login page. From there it is possible to proceed to a new user creation view and after a successful 
login to a view with lessonlist. From the lessonlist view it is possible to proceed to new lesson creation view.

## Functionality provided by the basic version

### Before login

- user can create a new user to the database
  - username must be unique and minimum length is three characters
  - minimum length for the password is six characters

- user can log in to the application
  - login is successful when user enters a valid username and a password to the login form
  - the application notifies the user if the user does't exist in the database

### After login

- users see their own lessonlists
- user can create a new lesson note
  - only the person who creates the lesson note sees it
- user can delete a lesson note from the lesson list
- user can log out from the application

## Further development ideas

After the basic version the application can be developed with following functionalities

- user can edit lesson notes
- The lesson list is possible to upload to a spreadsheet. This way it could be shared or modified with other applications.
- käyttäjätunnuksen (ja siihen liittyvien todojen) poisto