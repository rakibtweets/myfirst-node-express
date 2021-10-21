const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send(
    'This is My Second nodeJs file,wow learning node and express, waht is happening'
  );
});

const users = [
  { id: 0, name: 'Rakib Hasan', email: 'rakibhasan@gmail.com' },
  { id: 1, name: 'shuvo', email: 'rakibhasan@gmail.com' },
  { id: 2, name: 'Masud Hasan', email: 'rakibhasan@gmail.com' },
  { id: 3, name: 'Reza Hasan', email: 'rakibhasan@gmail.com' },
  { id: 4, name: 'Ashiq Hasan', email: 'rakibhasan@gmail.com' },
];
// all users
app.get('/users', (req, res) => {
  const search = req.query.search;
  // used query parameters
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});
// get single user using id or dynamic api
app.get('/users/:id', (req, res) => {
  console.log(req.params.id);
  const i = req.params.id;
  const user = users[i];
  res.send(user);
});

// app.method

// post method get data from users
app.post('/users', (req, res) => {
  const newUsers = req.body;
  newUsers.id = users.length;
  users.push(newUsers);
  console.log('hitting the post', req.body);
  // res.send(JSON.stringify(newUsers));
  res.json(newUsers);
});

app.get('/fruits', (req, res) => {
  res.send(['apple', 'Banana', 'mangoes', 'lichies', 'Jams', 'Jackpot']);
});
app.get('/fruits/mangoes/fazli', (req, res) => {
  res.send('Fazli amm onek misty');
});

app.listen(port, () => {
  console.log('Example of listening from  at local host', port);
});
