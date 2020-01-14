const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://zeppeomnistack:millus2623@cluster0-zl6ip.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//nota: o express tem que vir antes das routas pois o node lê de forma linear(cima para baixo)
// então para o express conseguir interpretar o json é preciso vir antes
app.use(express.json());
app.use(routes);

app.listen(3333);