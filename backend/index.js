// index.js
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const commonRoutes = require('./routes/commonRoutes');
const config = require('./config/config');
const app = express();
const PORT = config.PORT;
const {readdirSync} = require('fs');
const path = require('path');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const os = require("os");
const host = os.hostname();
const pool = require('./db');

readdirSync('./routes').map((route) => app.use('/api', require('./routes/' + route)))
app.use('/public', express.static(path.join(__dirname, 'public')));

// app.use(cors());
app.use(cors({ origin: 'http://localhost:5173' }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/common', commonRoutes);
app.use('/api/v1',require('./routes/videoRoutes'));
app.use('/api/v1',require('./routes/imagesRoutes'));
app.use('/api/v1',require('./routes/bannerRoutes'));
app.use('/api/v1',require('./routes/carousalRoutes'));


// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.stack}`);
  console.log("Shutting down due to uncaught exception");
  process.exit(1);
});

// Use Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

// Database Connection
pool.connect((err, client, release) => {
  if (err) {
      return console.error('Error acquiring client', err.stack);
  }
  client.query('SELECT NOW()', (err, result) => {
      release();
      if (err) {
          return console.error('Error executing query', err.stack);
      }
      console.log('Database connected:', result.rows);
  });
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});
const server = app.listen(PORT,(req,res)=>{
  console.log(`Server is working on ${host}:${PORT}`);
})

// // unhandled promise rejection
process.on("unhandledRejection",err => {
  console.log(`Error : ${err.message}`);
  console.log("Shuting down the server due to unhandled Promise Rejection");
  server.close(()=>{
      process.exit(1);
  });
});
process.once("SIGUSR2", function () {
  console.log("nodemon restart");
  process.kill(process.pid, "SIGUSR2");
});

process.on("SIGINT", function () {
  console.log("App terminated");
  process.kill(process.pid, "SIGINT");
});


