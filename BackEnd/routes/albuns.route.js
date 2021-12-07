/**
 * Arquivo: Local onde vai ficar as rotas da aplicação ou seja os Endpoint [Get/Post/Put/Delete]
 *
 */

const express = require("express"); // 8°) Importando o express para poder trabalhar com as rotas...

const router = express.Router(); // 9°) Inicializa o módulo de rostas do express (mostra que aqui é local de rotas)...

module.exports = router; // 10°) Exporta as rotas para serem utilizadas no index...
