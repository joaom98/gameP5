let imagemCenario;
let imagemPersonagem;
let imagemInimigo;

let cenario;
let trilhaSonora;
let personagem;
let inimigo;

function preload(){
    imagemCenario = loadImage("assets/imagens/cenario/floresta.png");
    imagemPersonagem = loadImage("assets/imagens/personagem/correndo.png");
    imagemInimigo = loadImage("assets/imagens/inimigos/gotinha.png");
    trilhaSonora = loadSound("assets/sons/trilha_jogo.mp3");
}

function setup(){
    createCanvas(windowWidth - 20, windowHeight -30);
    cenario = new Cenario(imagemCenario, 20);
    //trilhaSonora.loop();
    personagem = new Personagem(imagemPersonagem, [4,4] , 10 , 135, 110, 135, 220, 270);
    inimigo = new Inimigo( imagemInimigo , [4,7] , width - 100 , 52 , 52 , 52, 104, 104);
    frameRate(30);
}

function keyPressed(){
    if (key === "ArrowUp"){
        personagem.pula();
    }
}

function draw(){
    cenario.exibe();
    cenario.move();
    
    personagem.exibe();
    personagem.aplicaGravidade();
    
    inimigo.exibe();
    inimigo.move();
    
    if ( personagem.estaColidindo(inimigo) ) {
        console.log ("Colidiu");
    }
}


