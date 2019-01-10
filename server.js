/*eslint-env node*/
const express = require('express');
const graphqlHTTP = require('express-graphql');
const bodyParser = require('body-parser');
const schema = require('./schema');
const cors = require('cors');
const app = express();

// Config
require('dotenv').config();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Endpoint
app.use('/graphql', graphqlHTTP({
    schema, // eslint-disable-line no-undef
    graphiql: true
}));

// Server
app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}`)); // eslint-disable-line no-console