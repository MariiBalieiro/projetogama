const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./backend/swagger.json');
const routes = require('./backend/routes');
const app = express();
const cors =  require('cors');
require('dotenv').config();

mongoose.connect('mongodb+srv://bancodecurriculos:bancodecurriculos@cluster0.g4rth.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(require('./backend/routes'));
app.listen(process.env.PORT || '2800')

