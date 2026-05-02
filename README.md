How to Execute the MERN Project : Hello Welcome to VMS CLASS
=========================================
MERN Stack:
-------------
M --> MongoDB
E --> Express Js
R --> React JS
N --> Node Js

Note: Ensure that all the above components are properly installed in your computer. 

Step 1: Create a Main Project folder

mkdir 1_Helloworld_App

cd 1_Helloworld_App

Step 2: Create backend and Frontend folder:

Create two folders:

backend --> Node js + Express js + MongoDB code
fronted  --> React Code

mkdir backend frontend

Backend Setup:
-----------------
Step 3: Go inside backend folder

cd backend

we are going to create backend server first.


Step 4: Initialize the Noje.js Project

npm init -y

-y --> yes to all default settings

Purpose:
package.json file
------------------
Project name
Installed packages
scripts
Project dependencies

Step 5: Install backend packages:
-------------------------------------
express   --> creates backend server and APIs
mongoose --> Connects backend to MongoDB
cors  --> Allows frontend to call backend
dotenv  ---> Reads .env file values

npm install express mongoose cors dotenv

Step 6: Install Nodemon
---------------------------
npm install nodemon --save-dev


Step 7: Create backend files:
-------------------------------
server.js
.env

update the server.js
update the .env
update the package.json

Step 8: Run Backend
-----------------------
npm run dev


Frontend Setup:
-----------------
Step 9: Go to the frontend folder

cd..
cd frontend

Step 10: Create React App using Vite
------------------------------------
npm create vite@latest .

Step 11: Install frontend dependencies
--------------------------------------

npm install

Step 12: Install axios
------------------------

npm install axios

axios is used to call backend APIs from React

Step 13: Update the following files
-----------------------------------
App.jsx
App.css

Step 14: Start the backend server
--------------------------------
go to the backend directory

npm run dev

Step 15: Start the frontend server
-----------------------------------

go to the frontend directory

npm run dev

Open:
-----
http://localhost:5173

Output in the browser:
----------------------
VMS CLASS
Hello World : MERN Project
Welcome to the VMS CLASS: Project 1

























































