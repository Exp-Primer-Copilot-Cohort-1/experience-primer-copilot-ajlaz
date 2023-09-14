//create web server
const express = require('express');
const app = express();
const port = 3000;

//create a route for the app
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/comments', (req, res) => {
    res.send('This is a message from the web server');
});

//start the server
app.listen(port, () => {
    console.log('Server is running on port', port);
});
