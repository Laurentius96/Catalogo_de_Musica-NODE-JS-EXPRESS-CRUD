/**
 * Arquivo: Local onde vai ficar as guardadas as funções que vão ser chamadas pelo route.js, esse arquivo é responsável pelas respostas das requisições e o tratamento básico dos dados.
 */

// 12°) Retorna uma lista de albuns pre cadastradas para o Front-End...
const getAlbuns = (req, res) => {
  const albuns = albunsService();
  res.send(albuns);
};

// 13°) Retornado um unico album de acordo com o ID
const getAlbunsById = (req, res) => {
  /**
   * REQ - (RESQUEST/REQUISIÇÃO) -> O que vem do Usuário (Front-End) para o Back-End...
   * RES - (RESPONSE/RESPOSTA) ---> Volta para do Back-End para o  Usuário (Front-End)...
   */
  const id = req.params.id;
  const album = albunsService.getAlbunsById(id);
  res.send(album);
};

// 14°) Exportan as funções para serem usadas nas rotas...
module.exports = {
  getAlbuns,
  getAlbunsById,
};
