const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../login')));

app.get('/', (req, res) => {
  res.send('Szia! :)');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

