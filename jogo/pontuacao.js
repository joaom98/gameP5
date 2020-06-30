class Pontuacao {
    constructor(){
        this.pontos = 0;
    }
    
    exibe (){
        textAlign(RIGHT);
        fill('#fff');
        textSize(50);
        textFont(fonteAtari);
        text(parseInt(this.pontos), width - 30, 70);
    }
    
    adicionarPontos(){
        this.pontos += 0.2;
    }

}
