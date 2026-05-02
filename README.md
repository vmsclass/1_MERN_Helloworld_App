How to Execute the MERN Project
Hello, Welcome to VMS CLASS
MERN Stack:

M --> MongoDB
E --> Express Js
R --> React JS
N --> Node Js
Note: Ensure that all the above components are properly installed on your computer.
(Node.js, MongoDB should be installed and MongoDB service should be running)

Step 1: Create a Main Project folder
------------------------------------
mkdir 1_Helloworld_App

cd 1_Helloworld_App

Step 2: Create backend and Frontend folder:
-------------------------------------------
Create two folders:

backend  --> Node js + Express js + MongoDB code  

frontend --> React Code

mkdir backend frontend

Backend Setup:

Step 3: Go inside backend folder
---------------------------------
cd backend

We are going to create backend server first.

Step 4: Initialize the Node.js Project
----------------------------------------
npm init -y

-y --> yes to all default settings

Purpose: package.json file

•	Project name 

•	Installed packages 

•	Scripts 

•	Project dependencies 

Step 5: Install backend packages:
----------------------------------

express   --> creates backend server and APIs  

mongoose  --> connects backend to MongoDB  

cors      --> allows frontend to call backend  

dotenv    --> reads .env file values  

npm install express mongoose cors dotenv

Step 6: Install Nodemon
-------------------------

npm install nodemon --save-dev

👉 Nodemon automatically restarts the server when changes are made.

Step 7: Create backend files:
-----------------------------

Create the following files:

server.js

.env

Update the .env file:

PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/hello_mern

Update package.json (scripts section):

"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}

👉 npm run dev will start the server using nodemon

Update server.js
(Add your backend code here which includes:)
•	Express setup 
•	MongoDB connection 
•	API route (/api/hello) 
•	Server start 

Step 8: Run Backend
--------------------

npm run dev

👉 Backend will run at:

http://localhost:5000

👉 Test API:

http://localhost:5000/api/hello

Frontend Setup:
----------------

Step 9: Go to the frontend folder
---------------------------------
cd ..

cd frontend

Step 10: Create React App using Vite
------------------------------------

npm create vite@latest .

Choose:

React

JavaScript

Step 11: Install frontend dependencies
---------------------------------------

npm install

Step 12: Install axios
----------------------

npm install axios

👉 Axios is used to call backend APIs from React.

Step 13: Update the following files
-----------------------------------

App.jsx

App.css

👉 In App.jsx, add:

•	useState 

•	useEffect 

•	Axios API call to backend (/api/hello) 

•	Display response data 

👉 In App.css, add styling for UI

Step 14: Start the backend server
---------------------------------

Go to the backend directory:

cd ../backend

npm run dev

Step 15: Start the frontend server
------------------------------------

Go to the frontend directory:

cd ../frontend

npm run dev

Open:

http://localhost:5173

Output:

VMS CLASS  

Hello World : MERN Project  

Hello World from MERN Stack!
