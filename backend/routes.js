const express = require('express');
const controleCandidato = require('../backend/controleCandidato')
const routes = new express.Router();

routes.post('/registro', controleCandidato.register);

routes.get('/', (req, resp) => {
    resp.send('teste');
})

module.exports = routes;