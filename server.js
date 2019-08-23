const path = require('path');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('./client/build'));

// Plug Router in
require('./routes')(app);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.get('/demo', (req, res) => {
  res.json({ msg: 'Hello World' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on Port ${PORT}`));
