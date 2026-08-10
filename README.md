 BMW Car Website
 
This is a simple BMW Car Website made using Node.js, Express.js, and EJS.

The project is created for learning the basic concepts of Node.js, Express.js, EJS, Routes, Forms, and Dynamic Data.

 Features
BMW Home Page
BMW Cars Page
Search Cars Page
Configure BMW Page
Test Drive Page
View Car Button
Search Cars Route
Basic Navigation Between Pages
BMW Car Images
Simple and Beginner-Friendly UI
EJS for Dynamic Car Data
Test Drive Form


 Technologies Used
HTML
CSS
JavaScript
Node.js
Express.js
EJS

 Project Structure
 
BMW-Car-Website/
│
├── app.js
├── package.json
│
├── Public/
││   └── style.css
│
└── views/
    ├── home.ejs
    ├── search.ejs
    ├── configure.ejs
    └── testdrive.ejs
    
 Routes
Page	Route
Home	/
Search Cars	/search
Configure BMW	/configure
Test Drive	/testdrive

 Home Page
The Home Page contains:

BMW Logo
Navigation Bar
BMW Banner
BMW Cars
View Cars Button
Search Cars Button
Test Drive Button

 Search Cars
The project contains a separate Search Cars page.

The Search Cars button is available on:

Home Page
Configure Page
Test Drive Page
Search Route

/search

 Configure BMW
The Configure page displays BMW cars with basic information.

Car Details
Car Name
Price
Fuel Type
Transmission
Car Image
Users can select a car and move to the Test Drive page.

Configure Route
/configure
 Test Drive
The Test Drive page contains a simple test drive form.

Form Fields
BMW Model
Name
Email
Mobile Number
City
After submitting the form, a confirmation message is displayed.

Test Drive Route
/testdrive
 BMW Car Data
The project contains BMW car data with:

Car Name
Price
Fuel Type
Transmission
Car Image
The car data is displayed dynamically using EJS.

 Installation
1. Download the Project
Download or clone this project and open it in VS Code.

2. Open the Project Folder
Open the project folder in the terminal.

3. Install Dependencies
npm install
4. Start the Server
node app.js
5. Open in Browser
http://localhost:3000


 Learning Purpose
This project helps beginners understand:

Node.js
Express.js
Express Routes
EJS
Dynamic Data
HTML
CSS
JavaScript
Forms
Page Navigation
