const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../login')));

app.get('/', (req, res) => {
  res.send('Szia! :)');
});

let felhasznalok = [
  {id: 1, username: "SkibidiUwU", password: "12345"},
  {id: 2, username: "Pista", password: "alamfa"}
];

app.get('/users', (req, res) => {
  res.json(felhasznalok);
});

app.post('/users', (req, res) => {
  const újFelhasz = {
    id: felhasznalok.length + 1,
    name: req.body.felhasznalonev,
    pw: req.body.pw
  };
  felhasznalok.push(újFelhasz);
  res.status(201).json(újFelhasz);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

