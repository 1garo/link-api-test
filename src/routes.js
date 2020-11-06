const express = require("express");

const routes = express.Router();
const blingController = require("./app/controller/bling.controller");

routes.get("/bling", blingController.index);

routes.post("/bling", blingController.store);

routes.get("/query_db", blingController.query_db);
module.exports = routes;