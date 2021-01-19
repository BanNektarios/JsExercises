# Create a simple nodejs with MySQL CRUD on a single entity (model / table)

# Step 1:
#   $ npm install -g express-generator
    
# Step 2:
#   $ express --view = ejs books-crud
# Step 3:
#   change directory:
#   $ cd ejs

# Step 4:
#   install dependencies:
#   $ npm install

# Step 5:
#   run the app:
#   $ DEBUG=books-crud:* & npm start

# Step 7:


# Step 8: 
#   mkdir ./lib

# Step 9:
#   touch ./lib/db.js

# Step 10: 
#   npm i mysql2

# Step 11:
#   Create a connection and export it

# Step 12:
#   Implement the code for routes/books.js
#   a) it captures the /books request
#   b) connects to the database and does a SELECT query
#   c) renders the view by sending the title and books rows (as a table) to the view

# Step 13:
#   created a new view ./views/books.ejs
#   created partials folder
#   a)execute a simple js code such as a for loop
