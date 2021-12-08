/**
 * Arquivo: Local onde vai ficar as guardadas as funções que vão ser chamadas pelo route.js, esse arquivo é responsável pelas respostas das requisições e o tratamento básico dos dados.
 */

const albunsService = require("../services/albuns.service"); // 22°) Importando o service para poder ter acesso as funções que cuidam dos dados...

// 12°) Retorna uma lista de albuns pre cadastradas para o Front-End...
const getAlbuns = (req, res) => {
  const albuns = albunsService.getAlbunsService();
  res.send(albuns);
};

// 13°) Retornado um unico album de acordo com o ID
const getAlbunsById = (req, res) => {
  /**
   * REQ - (RESQUEST/REQUISIÇÃO) -> O que vem do Usuário (Front-End) para o Back-End...
   * RES - (RESPONSE/RESPOSTA) ---> Volta para do Back-End para o  Usuário (Front-End)...
   */
  const id = req.params.id;
  const album = albunsService.getAlbunsByIdService(id);
  res.send(album);
};

// 24°) Irá cadastrar um novo album de acordo com o objeto vindo do Font-End...
const postAlbum = (req, res) => {
  // É pego o objeto da requisição para ser cadastrado...
  const album = req.body;
  // É enviado o album que recebeu via corpo de requisição para o serviço adicionado na lista...
  const newAlbum = vagasService.addAlbum(album);
  res.send({
    message: `O álbum ${newAlbum.name} do(a) artista/banda ${newAlbum.artista} foi adicionada ao catálogo!`,
  });
};

// 26°) Vai receber um objeto(body) e um ID(param) para poder atualizar a vaga com o objeto de acordo com seu ID...
const putAlbum = (req, res) => {
  // Pega o parametro via requisição..
  const idParam = req.params.id;
  // Pega o objeto recebido via requisição...
  const albumEdit = req.body;
  const edicao = albunsService.putAlbum(idParam, albumEdit);
  if (edicao) {
    res.send({ message: `O álbum foi editado com sucesso!` });
  } else {
    res
      .status(404)
      .send({ message: `Não foi encontrado o álbum com o ID digitado!` });
  }
};

// 14°) Exportan as funções para serem usadas nas rotas...
module.exports = {
  getAlbuns,
  getAlbunsById,
  postAlbum,
  putAlbum,
};
