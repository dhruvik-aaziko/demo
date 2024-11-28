const express = require('express');
const connect = require('./config/connection');  
const route = require('./route/route');          
const app = express();

connect();

function log(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
}

app.use(log);

app.get('/health', (req, res) => {
    res.send("Health is good");
});

app.use(express.json());

app.use('/api/v1', route);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

