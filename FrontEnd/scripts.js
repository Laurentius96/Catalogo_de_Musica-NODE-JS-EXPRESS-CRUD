// const { put } = require("../BackEnd/routes/albuns.route");

const apiURL = "http://localhost:3000"; // 12°) Salvar a url do backend em uma variavel para ser utilizada depois na hora chamada da api...

// 36°)
let modoEdicao = false;
let idEdicao = 0;

const tabela = document.getElementById("tabela"); // 14°) Mapea o elemento "Tabela" (<table></table>) do html...

// 13°) Criando uma função onde é possível realizar uma aquisição [GET] para a API...
const getAlbuns = async () => {
  /**
   * Fetch é usado para se comunicar via requisição http(Get/, Post, Put, Delete, Patch).
   *
   * Response - é a resposta se a chamada de API foi feita com sucesso
   *
   * OBS: o "Fecht" quando não passada a configuração e a penas a URL, ele da uma chama do tipo [GET]
   */
  const response = await fetch(`${apiURL}/albuns`);
  const albuns = await response.json();

  albuns.map((album) => {
    tabela.insertAdjacentHTML(
      "beforeend",
      `
        <tr>
            <th scope="row">${album.id}</th>
            <td>${album.nome}</td>
            <td>${album.artista}</td>
            <td>${album.genero}</td>
            <td>${album.duracao}</td>
            <td>${album.ano}</td>
            <td>
            <td>
              <button class="btn btn-secondary" onclick="editaAlbum(${album.id})">Editar</button>
              <button class="btn btn-warning" onclick="deleteAlbum(${album.id})">Deletar</button>        
            </td>            
         </tr>

        `
    );
  });
};

getAlbuns();

// 16°)
const escolherAlbum = async () => {
  // Buscando o que o usuario digitou no input...
  const idDigitado = document.getElementById("idAlbum").value;
  // Fazendo a chamdada para a api /albuns/{id} para a capa nome lista de músicas individual...
  const response = await fetch(`${apiURL}/albuns/${idDigitado}`);
  // Salvo o objeto retornado pelo backend...
  const album = await response.json();
  // Mapeando a tabela do html e inserindo um album dentro...
  document.getElementById("album").insertAdjacentHTML(
    "beforeend",
    `
    <tr>
        <th scope="row">${album.id}</th>
        <td> <img src="${album.capa}"></th>
        <td>${album.nome}</td>
        <td>${album.tracklist}</td>

     </tr>

    `
  );
};

// 32°) [POST] - Mapeia os dados do Front-End para o Back-End...
const submitForm = async () => {
  // Mapear os inputs com os dados que o usuário digitou
  const nome = document.getElementById("nome").value;
  const capa = document.getElementById("capa").value;
  const artista = document.getElementById("artista").value;
  const genero = document.getElementById("genero").value;
  const duracao = document.getElementById("duracao").value;
  const ano = document.getElementById("ano").value;
  const tracklist = document.getElementById("tracklist").value;
  console.log(nome, capa, artista, genero, duracao, ano, tracklist);

  const album = {
    nome: nome,
    capa: capa,
    artista: artista,
    genero: genero,
    duracao: duracao,
    ano: ano,
    tracklist: tracklist,
  };
  console.log(album);

  if (modoEdicao) {
    putAlbum(album);
  } else {
    postAlbum(album);
  }
};

// 32.1°) [POST] http://localhost:3000/albuns/add - Recebe o objeto transforma em JSON e envia para a api através do método POST...
const postAlbum = async (album) => {
  // Chama a API com determindas configurações...
  const response = await fetch(`${apiURL}/albuns/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // JSON Stringfy -> transforma um objeto/array js em um JSON string...
    body: JSON.stringify(album),
  });
  const data = await response.json();
  alert(data.message);
  tabela.innerHTML = "";
  getAlbuns();
  limpaCampos();
};

// 32.2°) [PUT] http://localhost:3000/albuns/edit/{id} - recebe o objeto transforma em json e envia para a API juntamente com o seu ID para que possa ser editado...
const putAlbum = async (album) => {
  // Chama a API com determindas configurações...
  const response = await fetch(`${apiURL}/albuns/edit/${idEdicao}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    // JSON Stringfy -> transforma um objeto/array js em um JSON string...
    body: JSON.stringify(album),
  });
  const data = await response.json();
  alert(data.message);
  tabela.innerHTML = "";
  getAlbuns();
  limpaCampos();

  modoEdicao = false;
  idEdicao = 0;
};

// 34°) Preenche os dados do formulario de acordo com o álbum encontrada no Back-End pelo seu ID...
const editaAlbum = async (id) => {
  modoEdicao = true;
  idEdicao = id;

  // Recebe o ID e através do ID fazer uma chamada para a API para dssa forma buscar os dadaod de uma album por ID...
  const album = await getById(id);

  // Popular os inputs com os valores recebidos da chamada...
  document.getElementById("nome").value = album.nome;
  document.getElementById("capa").value = album.capa;
  document.getElementById("artista").value = album.artista;
  document.getElementById("genero").value = album.genero;
  document.getElementById("duracao").value = album.duracao;
  document.getElementById("ano").value = album.ano;
  document.getElementById("tracklist").value = album.tracklist;
};

// 35°) Recebe um ID e faz a chamada para a API e retorna o objeto encontrado...
const getById = async (id) => {
  const response = await fetch(`${apiURL}/albuns/${id}`);
  const album = await response.json();
  return album;
};

// 37°) [DELETE] http://localhost:3000/albuns/delete/id Recebo um id e exclue o album do Banck-End...
const deleteAlbum = async (id) => {
  const response = await fetch(`${apiURL}/albuns/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    // JSON Stringfy -> transforma um objeto/array js em um JSON string...
    body: JSON.stringify(album),
  });
  const data = await response.json();
  alert(data.message);

  // Limpa a lista de álbuns para que possa ser renderizada novamente sem a vaga que excluimos
  tabela.innerHTML = "";
  getAlbuns();
};

// 33°) Deleta o texto presente no campo de cadastro...
const limpaCampos = () => {
  document.getElementById("nome").value = "";
  document.getElementById("capa").value = "";
  document.getElementById("artista").value = "";
  document.getElementById("genero").value = "";
  document.getElementById("duracao").value = "";
  document.getElementById("ano").value = "";
  document.getElementById("tracklist").value = "";
};
