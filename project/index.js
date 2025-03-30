const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Judah! Welcome to Node.js MVC.');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
