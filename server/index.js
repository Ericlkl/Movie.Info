// import modules
const path = require('path');
const express = require('express');
const morgan = require('morgan');
// initial Express app
const app = express();

// Server Logs
app.use(morgan('dev'));

// allows server receiving json data
app.use(express.json());
// make client/build folder as default static files location
app.use(express.static(path.resolve(__dirname, '../', 'client', 'build')));

// Plug API Router in
require('./routes')(app);

// The others route makes it default as return webpage
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'));
});

// Set up port to 5000
const PORT = process.env.PORT || 5000;

// initial application listening on server PORT 5000
app.listen(PORT, () => console.log(`Server is listening on Port ${PORT}`));
