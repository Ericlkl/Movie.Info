const express = require('express');
const app = express();
const PORT = 5000;

app.get('/demo', (req, res) => {
  res.json({ msg: 'Hello World' });
});

app.listen(PORT, () => console.log(`Server is listening on Port ${PORT}`));
