class Jogo {
    constructor() {

    }

    setup() {
        this.inimigoAtual = 0;

        cenario = new Cenario(imagemCenario, 20);
        pontuacao = new Pontuacao();
        trilhaSonora.loop();

        personagem = new Personagem(imagemPersonagem, [4, 16], 10, 135, 110, 135, 220, 270);

        const inimigoGota = new Inimigo(imagemInimigoGota, [4, 28], width - 100, 52, 52, 52, 104, 104, 40, 100);

        const inimigoTroll = new Inimigo(imagemTroll, [5, 28], width * 2, 200, 200, 200, 400, 400, 30, 100);

        const inimigoVoador = new Inimigo(imagemGotaVoadora, [3, 16], width * 2, 200, 100, 75, 200, 150, 45, 100);

        frameRate(30);

        inimigos.push(inimigoGota);
        inimigos.push(inimigoTroll);
        inimigos.push(inimigoVoador);


    }

    teclar(key) {
        if (key === "ArrowUp") {
            personagem.pula(somPulo);
        }
    }

    draw() {
        cenario.exibe();
        cenario.move();

        pontuacao.exibe();
        pontuacao.adicionarPontos();

        personagem.exibe();
        personagem.aplicaGravidade();

        const inimigo = inimigos[inimigoAtual];

        inimigo.exibe();
        inimigo.move();


        if (inimigo.estaVisivel()) {
            inimigoAtual++;
            if (inimigoAtual > 2) {
                inimigoAtual = 0;
            }
        }

        if (personagem.estaColidindo(inimigo)) {
            console.log("Colidiu");
            fill(50);
            personagem.hit();

            image(imagemGameOver, width / 2 - 200, height / 3);

            noLoop();
        }

        /*
        inimigos.forEach( inimigoGenerico => {
        
            inimigoGenerico.exibe();
            inimigoGenerico.move();
            if ( personagem.estaColidindo( inimigoGenerico ) ) {
                console.log ("Colidiu");
                fill(50);
                personagem.hit();
            
                image(imagemGameOver, width / 2 - 200 , height / 3);
            
                noLoop();
            }    
        
        })*/
    }

}


