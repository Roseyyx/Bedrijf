const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const products = require('./routes/api/products');
app.use('/api/products', products);

const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/bedrijf', {
    useNewUrlParser: true
})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.listen(port, () => console.log(`Server started on port ${port}`));