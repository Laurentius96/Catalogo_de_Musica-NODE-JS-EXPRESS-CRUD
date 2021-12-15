/**
 * Arquivo: Responsável pelo tratamento das informações, lidando com regras de negócio e contato com o banco de dados (no nosso caso um array de objetos).
 *
 */

// 18°) Criando a variável que armazenara os albuns, que vão ser criadas, modificadas e armazenadas...
const lorenzoAlbuns = [
  {
    id: 1,
    capa: "https://ia902802.us.archive.org/6/items/cd_antennas-to-hell_slipknot/cd_antennas-to-hell_slipknot_itemimage.png",
    nome: "Antennas To Hell",
    artista: "Slipknot",
    genero: "Nu metal, Heavy metal, Metal alternativo",
    duracao: "77:07",
    ano: 2012,
    tracklist: [
      ` 1. (sic)
          2. Eyeless
          3. Wait And Bleed
          4. Spit It Out
          5. Surfacing
          6. People = Shit
          7. Disasterpiece
          8. Left Behind
          9. My Plague (New Abuse Mix)
          10. The Heretic Anthem (Live)
          11. Purity (Live)
          12. Pulse Of The Maggots
          13. Duality
          14. Before I Forget
          15. Vermilion (Terry Date Mix)
          16. Sulfur
          17. Psychosocial
          18. Dead Memories (Radio Mix)
          19. Snuff`,
    ],
    escutado: false,
  },
  {
    id: 2,
    capa: "https://ia800100.us.archive.org/0/items/cd_audioslave_audioslave/cd_audioslave_audioslave_itemimage.png",
    nome: "Audioslave",
    artista: "Audioslave",
    genero: "Hard rock, Rock alternativo",
    duracao: "65:26",
    ano: 2002,
    tracklist: [
      ` 1. Cochise
          2. Show Me How to Live
          3. Gasoline
          4. What You Are
          5. Like a Stone
          6. Set It Off
          7. Shadow on the Sun
          8. I Am the Highway
          9. Exploder
          10. Hypnotize
          11. Bring Em Back Alive
          12. Light My Way
          13. Getaway Car
          14. The Last Remaining Light`,
    ],
    escutado: false,
  },
  {
    id: 3,
    capa: "https://img.discogs.com/PowEgWqA4k60GpsoN-wnVOlJDbw=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-14781325-1581478383-6846.jpeg.jpg",
    nome: "Martin Garrix – The Martin Garrix Experience",
    artista: "Martin Garrix",
    genero: "Electronic, Pop",
    duracao: "71:00",
    ano: 2019,
    tracklist: [
      ` 1. Summer Days	
          2. No Sleep	
          3. High On Life	
          4. In The Name Of Love	
          5. There For You	
          6. Ocean	
          7. Scared To Be Lonely	
          8. Waiting For Tomorrow	
          9. So Far Away	
          10. Together
          11.	Forever	
          12.	Mistaken	
          13.	Byte (& Brooks)	
          14.	Burn Out	
          15.	Pizza	
          16.	Breach (Walk Alone)
          17.	Latency	
          18.	Game Over	
          19.	Yottabyte	
          20.	Glitch`,
    ],
    escutado: false,
  },
];

// 19°) Versão reduzida pois só possui um retorno...
const getAlbunsService = () => lorenzoAlbuns;

// 20°) Versão reduzida pois só possui um retorno...
const getAlbunsByIdService = (idParam) => {
  return lorenzoAlbuns.find((album) => album.id == idParam);
};

// 23°) Cadastra uma novo álbum(objeto) na lista lorenzoAlbuns...
const addAlbum = (newAlbum) => {
  // Aqui um id falso é criado para o novo álbum...
  const newId = lorenzoAlbuns.length + 1;
  newAlbum.id = newId;
  console.log(newAlbum);
  // Add esse novo album no array (lorenzoAlbuns)
  lorenzoAlbuns.push(newAlbum);
  return newAlbum;
};

// 27°) Procura um objeto de acordo com o ID e troca os seus valores...
const putAlbum = (idParam, albumEdit) => {
  // Busca o index do álbum que ele acha com ID que está sendo procurado...
  const index = lorenzoAlbuns.findIndex((album) => album.id == idParam);
  // Verifico se realmente encontrou um index valido na lista...
  if (index >= 0) {
    /**
     * SPRED OPERATOR:
     * Faz um espelho do álbum na lista e um espelho do álbum editada e junto as duas trocando apenas o que é necessario...
     *
     */
    lorenzoAlbuns[index] = {
      ...lorenzoAlbuns[index],
      ...albumEdit,
    };
    // Retorna um boleano true para o controller podet saber que a edição foi feita com sucesso...
    return true;
  } else {
    console.log("Não existe album com o ID digitado");
    // Retornamos um boleano false para o controller podet saber que a edição teve um erro...
    return false;
  }
};

// 29°)
const deleteAlbum = (idParam) => {
  const index = lorenzoAlbuns.findIndex((album) => album.id == idParam);
  // startnumber = qual a posição que deve ser iniciada a exclusao
  // deleCount = quantidade de items para ser excluido
  const albumExcluido = lorenzoAlbuns[index];
  lorenzoAlbuns.splice(index, 1);
  return albumExcluido;
};

// 21°) Exportando as funções para serem usadas nas rotas...
module.exports = {
  getAlbunsService,
  getAlbunsByIdService,
  addAlbum,
  putAlbum,
  deleteAlbum,
};
