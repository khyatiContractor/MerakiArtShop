# MerakiArtShop

![MerakiArt](MerakiArt.gif "MerakiArt")

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8 ,Firebase version 5.0.3 and angularfire2 version 5.0.0. Angular routing, forms, component communication is used.  
This Application is used to display Portfolio Art website Using Angular. 
It has SignUp and LogIn functionality where user can signup using prefered email id. Validation of all the fiels is available. User can visit User profile page. 
Upload Art work with necessary details. Display list of Art for which details are stored on and retrived from the Realtime firebase database. All the images are stored on Firestore on Firebase. 
Filter Funcnality is present for the list of Art.
Firebase Authentication and hosting is used. 

# FireStore Structure
![FireStore Structure](https://github.com/khyatiContractor/MerakiArtShop/blob/master/Firestore.PNG)

# Firebase Realtime Databse Structure
![FireStore Structure](https://github.com/khyatiContractor/MerakiArtShop/blob/master/Firebase%20%Realtime Database.PNG)

# Working Application Url : [MerakiArt](https://merakiart-35689.firebaseapp.com/)

## Build
npm install to install all the required dependencies on the root folder. 
Run `ng build ` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Deploy on Firebase
You need to create Environment varible file in the "src" folder with your firebase project web setup credentials. 
firebase init for functions and hosting.
firebase deploy to deploy the application.
Enable Realtime Database and firestore on Firebase.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

