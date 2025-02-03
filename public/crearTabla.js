const express = require('express');
const app = express();

/*
- Integrar crearTabla en usuarios.html
- Crear endpoint GET /canciones 
- Crear canciones html e integrar crearTabla()
- EXTRA añade un query a /user como en la poke API, por ejemplo "?limit="
*/

const canciones = [
    { title: "Song 1", artist: "Artist 1", year: 2020 },
    { title: "Song 2", artist: "Artist 2", year: 2021 },
    { title: "Song 3", artist: "Artist 3", year: 2022 },
    { title: "Song 4", artist: "Artist 4", year: 2023 },
];

app.get('/canciones', (req, res) => {
    res.json(canciones)})