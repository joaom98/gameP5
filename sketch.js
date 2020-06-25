function preload(){
    imagemCenario = loadImage("assets/imagens/cenario/floresta.png");
    imagemGameOver = loadImage("assets/imagens/assets/game-over.png");
    
    imagemPersonagem = loadImage("assets/imagens/personagem/correndo.png");
    imagemInimigoGota = loadImage("assets/imagens/inimigos/gotinha.png");
    imagemTroll = loadImage("assets/imagens/inimigos/troll.png");
    imagemGotaVoadora = loadImage("assets/imagens/inimigos/gotinha-voadora.png");
    
    
    trilhaSonora = loadSound("assets/sons/trilha_jogo.mp3");
    somPulo = loadSound("assets/sons/somPulo.mp3");
}


function setup(){
    createCanvas(windowWidth - 20, windowHeight -30);
    cenario = new Cenario(imagemCenario, 20);
    
    jogo = new Jogo();
    jogo.setup();
    
    cenaAtual = 'jogo';


    frameRate(30);
    
}

function keyPressed(){
    jogo.teclar(key);
}

function draw(){
   
    if ( cenaAtual === 'jogo' ){
        jogo.draw();
    }
    
    
}


