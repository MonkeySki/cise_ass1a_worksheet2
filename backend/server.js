const express = require("express");
const users = require ("./dummydata/users")
const payments = require("./dummydata/payments")
const dotenv = require("dotenv");
var cors = require('cors');
dotenv.config();
const PORT = process.env.PORT || 5000;

const server = express();
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.send("API is running and I am a changed message!")
})

server.get('/users', (req,res) => {
    res.json(users);
});

server.get('/users/:id', (req,res) => {
    const user = users.find((n) => n._id === req.params.id);
    res.send(user);
    console.log(req.params);
});

server.get('/payments', (req,res) => {
    res.json(payments);
});

server.post('/payments', (req, res) => {
    res.json(req.body);
    payments.push(req.body)
  });

server.listen(PORT, console.log(`server is working and listening on PORT ${PORT}`));