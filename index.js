const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./backend/swagger.json');
const routes = require('./backend/routes');
const app = express();
const cors =  require('cors');

mongoose.connect('mongodb+srv://bancodecurriculos:bancodecurriculos@cluster0.g4rth.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(require('./backend/routes'));
app.listen('2800', () => {
    console.log('rodando na porta 2800')
})

