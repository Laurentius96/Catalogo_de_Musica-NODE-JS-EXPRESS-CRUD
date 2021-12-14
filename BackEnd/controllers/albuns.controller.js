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
  // Validar os dados de cadastro...
  if (
    !req.body ||
    !req.body.nome ||
    !req.body.capa ||
    !req.body.artista ||
    !req.body.genero ||
    !req.body.duracao ||
    !req.body.ano
  ) {
    res.status(400).send({
      message:
        "Tirando o campo de cadastro de música, por favor preencher obrigatorimante os demais campos!",
    });
    return;
  } else {
    // É pego o objeto da requisição para ser cadastrado...
    const album = req.body;
    console.log(req.body);
    // É enviado o album que recebeu via corpo de requisição para o serviço adicionado na lista...
    const newAlbum = albunsService.addAlbum(album);
    if (!newAlbum.id) {
      res.status(500).send({
        message: `Erro ao salvar a vaga, por favor tentar novamente!`,
      });
    }
    res.send({
      message: `O álbum ${newAlbum.nome} do(a) artista/banda ${newAlbum.artista} foi adicionada ao catálogo!`,
    });
  }
};

// 26°) Vai receber um objeto(body) e um ID(param) para poder atualizar o álbum com o objeto de acordo com seu ID...
const putAlbum = (req, res) => {
  if (
    !req.body ||
    !req.body.nome ||
    !req.body.capa ||
    !req.body.artista ||
    !req.body.genero ||
    !req.body.duracao ||
    !req.body.ano
  ) {
    res.status(400).send({
      message:
        "Tirando o campo de cadastro de música, por favor preencher obrigatorimante os demais campos!",
    });
    return;
  } else {
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
  }
};

// 30°) Vai excluir um item da lista e devolver a msg de excluido para o Front-End
const deleteAlbum = (req, res) => {
  const id = req.params.id;
  const albumExcluido = albunsService.deleteAlbum(req.params.id);

  if (!albumExcluido) {
    res
      .status(404)
      .send({ message: "Não foi possivel excluir, o id não foi encontrado" });
  }
  res.send({
    message: `O álbum ${albumExcluido.nome} do(a) artista/banda ${albumExcluido.artista} foi removido do catálogo! `,
  });
};

// 14°) Exportan as funções para serem usadas nas rotas...
module.exports = {
  getAlbuns,
  getAlbunsById,
  postAlbum,
  putAlbum,
  deleteAlbum,
};
