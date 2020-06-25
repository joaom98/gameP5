function preload(){
    imagemCenario = loadImage("assets/imagens/cenario/floresta.png");
    imagemGameOver = loadImage("assets/imagens/assets/game-over.png");
    imagemTelaInicial = loadImage("assets/imagens/assets/telaInicial.png");
    fonteTelaInicial = loadFont("assets/assets/fonteTelaInicial.otf");

    imagemPersonagem = loadImage("assets/imagens/personagem/correndo.png");
    imagemInimigoGota = loadImage("assets/imagens/inimigos/gotinha.png");
    imagemTroll = loadImage("assets/imagens/inimigos/troll.png");
    imagemGotaVoadora = loadImage("assets/imagens/inimigos/gotinha-voadora.png");
    
    
    trilhaSonora = loadSound("assets/sons/trilha_jogo.mp3");
    somPulo = loadSound("assets/sons/somPulo.mp3");
}
