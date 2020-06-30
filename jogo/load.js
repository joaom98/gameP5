function preload() {
    imagemCenario = loadImage("meusAssets/cenario/fundo.png");
    imagemGameOver = loadImage("assets/imagens/assets/game-over.png");
    imagemTelaInicial = loadImage("assets/imagens/assets/telaInicial.png");
    fonteAtari = loadFont("meusAssets/ui/PressStart2P.ttf");

    imagemPersonagem = loadImage("meusAssets/personagem/skullman.png");
    imagemInimigoCobra = loadImage("meusAssets/inimigos/cobra.png");
    imagemDragao = loadImage("meusAssets/inimigos/dragao.png");
    imagemOlho = loadImage("meusAssets/inimigos/dragao.png");
    imagemCaranguejo = loadImage("meusAssets/inimigos/caranguejo.png");
    imagemVida = loadImage("meusAssets/ui/coracao.png");

    configs = loadJSON("configs/config.json");

    trilhaSonora = loadSound("meusAssets/sons/trilhaJogo.mp3");
    somPulo = loadSound("meusAssets/sons/somPulo.mp3");
}
