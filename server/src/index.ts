const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const ProductRoute = require('./routes/api/ProductRoute');
const AdminRoute = require('./routes/api/AdminRoute');
const RoleRoute = require('./routes/api/RoleRoute');
const CategoryRoute = require('./routes/api/CategoryRoute');
app.use('/api/products', ProductRoute);
app.use('/api/admin', AdminRoute);
app.use('/api/roles', RoleRoute);
app.use('/api/categories', CategoryRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));