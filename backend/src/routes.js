const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfilleController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();
//listar ongs cadastradas
routes.get('/ongs', OngController.index);
//adicionar uma ong
routes.post('/ongs', OngController.create);
//adicionar um caso
routes.post('/incidents', IncidentsController.create);
//listar casos
routes.get('/incidents', IncidentsController.index);
//deletar um caso usando route params
routes.delete('/incidents/:id', IncidentsController.delete);
//listar todos os casos de uma ong
routes.get('/profile', ProfileController.index);
//fazer login
routes.post('/sessions', SessionController.create);

module.exports = routes;