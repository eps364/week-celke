
require('dotenv').config()
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    res.send("Semana Imersão Celke - 2021")
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado na porta ${process.env.PORT} : http://localhost:${process.env.PORT}`);
});
