const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// tipos de parametros
/*
Query params: são acessados por request.query  e servem para filtros, ordenação, paginação, etc...
Route Params : são acessados por meio de request.params e servem para identificar um recurso na alteração ou na remoção
Body: request.body são dados para criação ou alteração de algum registro
*/
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;