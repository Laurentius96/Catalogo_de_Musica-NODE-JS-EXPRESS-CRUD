const express = require("express"); // 1°) Importa o express para que seja possivel utilizar as suas funções na aplicação...
const app = express(); // 2°) Inicializa o express no nosso arquivo JavaSript para que ele possa assumir as funções do express...
app.use(express.json()); // 3°) É dito para o express trabalhar com middleware de Jason para trabalharmos com o formato JSON...
const port = 3000; // 4°) Definindo a porta que o Back o irá executar...

// 7°) Criando a variável que armazenara as músicas, que vão ser criadas, modificadas e armazenadas...

const lista = [
  {
    id: 1,
    imagem:
      "https://ia902802.us.archive.org/6/items/cd_antennas-to-hell_slipknot/cd_antennas-to-hell_slipknot_itemimage.png",
    nome: "Antennas To Hell",
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
    escutado: "sim",
  },
  {
    id: 2,
    imagem:
      "https://ia800100.us.archive.org/0/items/cd_audioslave_audioslave/cd_audioslave_audioslave_itemimage.png",
    nome: "Audioslave",
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
    escutado: "sim",
  },
  {
    id: 3,
    imagem:
      "https://img.discogs.com/PowEgWqA4k60GpsoN-wnVOlJDbw=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-14781325-1581478383-6846.jpeg.jpg",
    nome: "Martin Garrix – The Martin Garrix Experience",
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
    escutado: "sim",
  },
];

/**
 *  5°) API - Forma de comunicação entre sistemas que contem endereços (End Points)...
 *  API REST - Permite o uso GET/POST/PUT/DELETE...
 *  Criar um endpoit para retomar um msg para o cliente...
 *
 */
app.get("/", (req, res) => {
  /**
   * REQ - (RESQUEST/REQUISIÇÃO) --- Vem do Usuário...
   * RES - (RESPONSE/RESPOSTA) ----- Volta para o Usuário...
   */
  res.send("Olá!");
});

// 8°) [GET] /lista - retorna a lista de albuns
app.get("/lista", (req, res) => {
  res.send(lista);
});

app.listen(port, () => {
  // 6°) Inicializa o servidor...
  console.log(`App está rodadando com sucesso na porta: ${port}`);
});
