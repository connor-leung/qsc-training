const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Add this line to load .env variables

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/todoapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

// Routes
const tasks = require('./routes/tasks');
const authRoutes = require('./routes/auth');
app.use('/tasks', tasks);
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
