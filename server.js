const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = require('./config/keys').mongoURI;

//establish connection to db

mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
    
app.get('/', (req, res) => res.send('Hello wordfdld'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));