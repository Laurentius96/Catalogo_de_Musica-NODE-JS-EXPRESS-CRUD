const apiURL = "http://localhost:3000"; // 12°) Salvar a url do backend em uma variavel para ser utilizada depois na hora chamada da api...

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
  const nome = document.getElementById("nome").value;
  const artista = document.getElementById("artista").value;
  const genero = document.getElementById("genero").value;
  const duracao = document.getElementById("duracao").value;
  const ano = document.getElementById("ano").value;
  const capa = document.getElementById("capa").value;
  const tracklist = document.getElementById("tracklist").value;

  const album = {
    nome,
    artista,
    genero,
    duracao,
    ano,
    capa,
    tracklist,
  };

  // Faz a chamada para a API com algumas configurações...
  const response = await fetch(`${apiURL}/albuns/add`, {
    method: "POST",
    headers: {
      "Contend-Type": "application/jason",
    },
    // JSON Stringfy = transforma um objeto/array js em um JSON string
    body: JSON.stringify(album),
  });
  const data = await response.json();
  alert(data.message);

  limpaCampos();
};

const limpaCampos = () => {
  document.getElementById("nome").value = " ";
  document.getElementById("artista").value = " ";
  document.getElementById("genero").value = " ";
  document.getElementById("duracao").value = " ";
  document.getElementById("ano").value = " ";
  document.getElementById("capa").value = " ";
  document.getElementById("tracklist").value = " ";
};
