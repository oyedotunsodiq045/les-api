const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

// Route files
const auth = require('./routes/auth');
const downloads = require('./routes/downloads');
const users = require('./routes/users');

// Load env vars
dotenv.config({
  path: './config/config.env'
});

// Connect DB
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Dev logging middleware
if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/auth', auth);
app.use('/api/v1/admin/export', downloads);
app.use('/api/v1/admin/users', users);

app.use(errorHandler);

const PORT = process.env.PORT || 5004;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}!`.yellow
      .bold
  )
);

// Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error ${err.message}`.red);
  // Close server and exit process
  server.close(() => process.exit(1));
});