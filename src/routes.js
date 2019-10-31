const routes = require("express").Router();

const ProdutoController = require('./app/controllers/ProdutosController')

routes.get('/search', ProdutoController.store)

routes.get('/test', function (req, res){
    res.send(200)
});

module.exports = routes;