function setup() {
    createCanvas(windowWidth - 20, windowHeight - 30);
    cenario = new Cenario(imagemCenario, 20);

    jogo = new Jogo();
    jogo.setup();

    botaoGerenciador = new BotaoGerenciador("Iniciar", width/2, height/2);

    telaInicial = new TelaInicial();

    cenas = {
        jogo,
        telaInicial
    };


    

}

function keyPressed() {
    jogo.teclar(key);
}

function draw() {


    cenas[cenaAtual].draw();


}


