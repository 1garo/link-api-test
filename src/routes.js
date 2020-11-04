const express = require("express");

const routes = express.Router();
const blingController = require("./app/controller/bling.controller");

routes.get("/bling", blingController.index);

routes.post("/bling", blingController.store);
//TODO: Implement pipe calls
// curl -X GET "https://bling.com.br/Api/v2/pedidos/json/"
// -G
// -d "apikey=a42cd0e54d8c1d5c8b0d5be23fb52e80371f74222273e532aaa4f26b2f04100c56fda7ef"
// routes.get("/pipe", pipeController.index);
// curl -X POST "https://bling.com.br/Api/v2/pedido/json/"
     //-d "apikey={apikey}"
     //-d "xml={xml_do_pedido}"https://manuais.bling.com.br/manual/?item=situacoes
// routes.post("/pipe", pipeController.store);
module.exports = routes;