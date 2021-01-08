
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
require('./models/Metas');

const app = express();
const Meta = mongoose.model('Meta');

app.use(express.json());

mongoose.connect( process.env.URL_MONGO , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com o BD MongoDB realizado com sucesso!");
}).catch((err) => {
    console.log("Erro: Conexão com o BD MongoDB não realizado com sucesso: " + err);
});

app.get('/', async (req, res) => {
    res.send("Semana Imersão Celke - 2021")
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado na porta ${process.env.PORT} : http://localhost:${process.env.PORT}`);
});
