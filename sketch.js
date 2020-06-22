let imagemCenario;
let imagemPersonagem;
let cenario;
let trilhaSonora;
let personagem;

function preload(){
    imagemCenario = loadImage("assets/imagens/cenario/floresta.png");
    imagemPersonagem = loadImage("assets/imagens/personagem/correndo.png");
    trilhaSonora = loadSound("assets/sons/trilha_jogo.mp3");
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    cenario = new Cenario(imagemCenario, 20);
    trilhaSonora.loop();
    personagem = new Personagem(imagemPersonagem);
    frameRate(30);
}

function draw(){
    let alturaPersonagem = 135;
    cenario.exibe();
    cenario.move();
    personagem.exibe();
}


