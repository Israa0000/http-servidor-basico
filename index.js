const express = require('express');
const app = express();

function randomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function createUser(){
    const pre = ['hyper', 'super', 'ultra', 'mega', 'giga', 'tera', 'peta', 'exa', 'zetta', 'yotta', 'red', 'blue', 'green', 'pink', 'yellow', 'orange'];
    const name = ['cat', 'dog', 'bird', 'fish', 'elephant', 'tiger', 'lion', 'wolf', 'fox', 'bear', 'apple', 'banana', 'cherry', 'grape', 'kiwi', 'lemon', 'mango', 'melon', 'orange', 'peach'];
    const post = Math.floor(Math.random() * 9999);
    const username = randomFromArray(pre) + randomFromArray(name) + post;
    const email = username + '@gmail.com';
    const password = randomFromArray(pre) + randomFromArray(name) + post;
    const role = "user";
    const status = randomFromArray(['active', 'inactive']);
    const user = { 
        username, 
        email, 
        password, 
        role, 
        status
    };
    return user;
}
const users = [];
for (let i = 0; i < 5; i++) {
    users.push(createUser());
}

app.use(express.static("public"))

app.get('/users', (req, res) => {
    res.json(users);
});


//canciones

const canciones = [
    { title: "Song 1", artist: "Artist 1", year: 2020 },
    { title: "Song 2", artist: "Artist 2", year: 2021 },
    { title: "Song 3", artist: "Artist 3", year: 2022 },
    { title: "Song 4", artist: "Artist 4", year: 2023 },
];

app.get('/canciones', (req, res) => {
    res.json(canciones)})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});