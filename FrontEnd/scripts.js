const apiURL = "http://localhost:3000"; // Salvar a url do backend em uma variavel para ser utilizada depois na hora chamada da api...

const tabela = document.getElementById("tabela"); // Mapea o elemento "Tabela" (<table></table>) do html...

// Criando uma função onde é possível realizar uma aquisição [GET] para a API...
const getAlbuns = async () => {
  const response = await fetch(`${apiURL}/albuns`);
  const albuns = await response.json();

  albuns.map((album) => {
    console.log(album.nome);
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
