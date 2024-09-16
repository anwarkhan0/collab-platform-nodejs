const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());


connectDB();


// Routes
app.use('/api/auth', authRoutes);


module.exports = app;


// const { auth } = require('express-openid-connect');

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: 'a long, randomly-generated string stored in env',
//   baseURL: 'http://localhost:3000',
//   clientID: 'q9uSJHjYrDkVHlAdX7Cv4cxuVYAY2s6f',
//   issuerBaseURL: 'https://dev-fr5wuhjgb2qp5jqy.us.auth0.com'
// };

// // auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config));

// // req.isAuthenticated is provided from the auth router
// app.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });