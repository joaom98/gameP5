class Jogo {
    constructor() {
        this.indice = 0;
        this.mapa = configs.mapa;

    }

    setup() {
        this.inimigoAtual = 0;

        frameRate(configs.gerais.frameRate);

        cenario = new Cenario(imagemCenario, 20);
        pontuacao = new Pontuacao();
        trilhaSonora.loop();
        
        vida = new Vida(configs.vida.maxima, configs.vida.inicial);

        personagem = new Personagem(imagemPersonagem, [4, 4], 30, 100, 80, 1, 60, 80);

        const inimigoCobra = new Inimigo(imagemInimigoCobra, [1, 1], 30, width - 100, 52, 1/2, 150, 180, 40);
        const inimigoDragao = new Inimigo(imagemDragao, [1, 1], 30, width * 2, 200, 1/2, 240, 170, 30);
        const inimigoOlho = new Inimigo(imagemOlho, [1, 1], 30, width * 2, 200, 1/2, 100, 90, 45);
        const inimigoCaranguejo = new Inimigo(imagemCaranguejo, [1, 1], 30, width * 2, 200, 1/2, 100, 90, 45);

        

        inimigos.push(inimigoCobra);
        inimigos.push(inimigoDragao);
        inimigos.push(inimigoOlho);
        inimigos.push(inimigoCaranguejo);


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

        vida.draw();

        const linhaAtual = this.mapa[this.indice];
        const inimigo = inimigos[linhaAtual.inimigo];

        inimigo.velocidade = linhaAtual.velocidade;

        inimigo.exibe();
        inimigo.move();


        if ( inimigo.estaVisivel() ) {
            this.indice++;
            inimigo.aparece();

            if (this.indice > this.mapa.length - 1 ) {
                this.indice = 0;
            }
        }

        if (personagem.estaColidindo(inimigo)) {
            
            fill(50);
            vida.perdeVida();
            personagem.tornarInvencivel();

            if ( vida.vidas === 0 ) {
                image(imagemGameOver, width / 2 - 200, height / 3);
                noLoop();
            }

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


