function setup() {
    createCanvas(windowWidth - 20, windowHeight - 30);
    cenario = new Cenario(imagemCenario, 20);

    jogo = new Jogo();
    jogo.setup();


    telaInicial = new TelaInicial();

    cenas = {
        jogo,
        telaInicial
    };


    frameRate(30);

}

function keyPressed() {
    jogo.teclar(key);
}

function draw() {


    cenas[cenaAtual].draw();


}


