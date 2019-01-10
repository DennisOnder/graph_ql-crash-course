const express = require('express'); // eslint-disable-line no-undef
const bodyParser = require('body-parser'); // eslint-disable-line no-undef
const app = express();

// Config
require('dotenv').config(); // eslint-disable-line no-undef

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Server
app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}`)); // eslint-disable-line no-console, no-undef