
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

app.get('/metas', async (req, res) => {
    await Meta.find({}).then((metas) => {
        return res.json({
            error: false,
            metas
        });
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum resgistro encontrado!"
        });
    });
});

app.post('/metas', async (req, res) => {

    await sleep(3000);

    function sleep(ms){
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }

    await Meta.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro: Meta não cadastrada com sucesso!"
        });
    });

    return res.json({
        error: false,
        message: "Meta cadastrada com sucesso!"
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado na porta ${process.env.PORT} : http://localhost:${process.env.PORT}`);
});
