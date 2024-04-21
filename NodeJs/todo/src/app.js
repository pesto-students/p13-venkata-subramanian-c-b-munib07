const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');
const logger = require('./middlewares/logger');
const notFoundHandler = require('./middlewares/notFoundHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware\
app.use(bodyParser.json());
app.use(logger);

// Routes
app.use('/tasks', taskRoutes);

// 404 Handler
app.use(notFoundHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
