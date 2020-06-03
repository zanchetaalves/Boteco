const express = require('express');
const routes = express.Router();
const UsuarioController = require('./controllers/UsuarioController');
const CategoriaController = require('./controllers/CategoriaController');
const MarcaController = require('./controllers/MarcaController');
const ProdutoController = require('./controllers/ProdutoController');
const ClienteController = require('./controllers/ClienteController');
const ClienteCompraController = require('./controllers/ClienteCompraController');
const ClienteCompraLancamentoController = require('./controllers/ClienteCompraLancamentoController');

routes.get('/usuario/listar', UsuarioController.Listar);
routes.post('/usuario/inserir', UsuarioController.Inserir);
routes.put('/usuario/alterar/:id', UsuarioController.Alterar);
routes.delete('/usuario/excluir/:id', UsuarioController.Excluir);

routes.get('/categoria/listar', CategoriaController.Listar);
routes.post('/categoria/inserir', CategoriaController.Inserir);
routes.put('/categoria/alterar/:id', CategoriaController.Alterar);
routes.delete('/categoria/excluir/:id', CategoriaController.Excluir);

routes.get('/marca/listar', MarcaController.Listar);
routes.post('/marca/inserir', MarcaController.Inserir);
routes.put('/marca/alterar/:id', MarcaController.Alterar);
routes.delete('/marca/excluir/:id', MarcaController.Excluir);

routes.get('/produto/listar', ProdutoController.Listar);
routes.post('/produto/inserir', ProdutoController.Inserir);
routes.put('/produto/alterar/:id', ProdutoController.Alterar);
routes.delete('/produto/excluir/:id', ProdutoController.Excluir);

routes.get('/cliente/listar', ClienteController.Listar);
routes.post('/cliente/inserir', ClienteController.Inserir);
routes.put('/cliente/alterar/:id', ClienteController.Alterar);
routes.delete('/cliente/excluir/:id', ClienteController.Excluir);

routes.get('/clientecompra/listar', ClienteCompraController.Listar);
routes.post('/clientecompra/inserir', ClienteCompraController.Inserir);
routes.delete('/clientecompra/excluir/:id', ClienteCompraController.Excluir);

routes.get('/lancamento/listar', ClienteCompraLancamentoController.Listar);
routes.get('/lancamento/listarcompleto', ClienteCompraLancamentoController.ListarCompleto);
routes.post('/lancamento/inserir', ClienteCompraLancamentoController.Inserir);
routes.put('/lancamento/alterar/:id', ClienteCompraLancamentoController.Alterar);
routes.delete('/lancamento/excluir/:id', ClienteCompraLancamentoController.Excluir);

module.exports = routes;