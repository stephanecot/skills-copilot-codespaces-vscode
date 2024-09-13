// Create web server
// 1. Import express
// 2. Create instance of express
// 3. Create a route for GET request for /comments
// 4. Create a route for GET request for /comments/:id
// 5. Create a route for POST request for /comments
// 6. Create a route for PUT request for /comments/:id
// 7. Create a route for DELETE request for /comments/:id
// 8. Start the server
// 9. Test the server

// 1. Import express
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// 2. Create instance of express
const app = express();
app.use(bodyParser.json());

// 3.
app.get('/comments', (req, res) => {
    fs.readFile('comments.json', (err, data) => {
        if (err) {
            res.status(500).send('Internal server error');
        } else {
            res.send(JSON.parse(data));
        }
    });
}   );