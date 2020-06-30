function preload() {
    imagemCenario = loadImage("meusAssets/cenario/fundo.png");
    imagemGameOver = loadImage("assets/imagens/assets/game-over.png");
    imagemTelaInicial = loadImage("assets/imagens/assets/telaInicial.png");
    fonteTelaInicial = loadFont("assets/imagens/assets/fonteTelaInicial.otf");

    imagemPersonagem = loadImage("meusAssets/personagem/skullman.png");
    imagemInimigoCobra = loadImage("meusAssets/inimigos/cobra.png");
    imagemDragao = loadImage("meusAssets/inimigos/dragao.png");
    imagemOlho = loadImage("meusAssets/inimigos/dragao.png");
    imagemCaranguejo = loadImage("meusAssets/inimigos/caranguejo.png");
    imagemVida = loadImage("meusAssets/ui/coracao.png");

    configs = loadJSON("configs/config.json");

    trilhaSonora = loadSound("assets/sons/trilha_jogo.mp3");
    somPulo = loadSound("assets/sons/somPulo.mp3");
}
