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
            <td>${album.capa}</td>
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
  // Fazendo a chamdada para a api /vagas/{id} para pegar a vaga individual...
  const response = await fetch(`${apiURL}/albuns/${idDigitado}`);
  // Salvo o objeto retornado pelo backend...
  const album = await response.json();
  // Mapeando a tabela do html e inserindo uma vaga dentro...
  document.getElementById("album").insertAdjacentHTML(
    "beforeend",
    `
    <tr>
            <td>${album.capa}</td>
            <td>${album.nome}</td>
            <td>${album.artista}</td>
            <td>${album.genero}</td>
            <td>${album.duracao}</td>
            <td>${album.ano}</td>
     </tr>

    `
  );
};
