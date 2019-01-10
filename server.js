/*eslint-env node*/
const express = require('express');
const graphqlHTTP = require('express-graphql');
const bodyParser = require('body-parser');
const schema = require('./schema');
const cors = require('cors');
const path = require('path');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Endpoint
app.use('/graphql', graphqlHTTP({
    schema, // eslint-disable-line no-undef
    graphiql: true
}));

// Static folder
app.use(express.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// Port
const PORT = process.env.PORT || 9000;

// Server
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)); // eslint-disable-line no-console