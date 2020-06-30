class TelaInicial {

    constructor() {

    }

    draw() {
        this._imagemDeFundo();
        this._texto();
        //this._botao;
    }

    _imagemDeFundo() {
        
        background(0, 0, 0);
        //image(imagemTelaInicial, 0, 0, width, height);
    }

    _texto(){
        textFont(fonteAtari);
        textSize(50);
        textAlign(CENTER);
        fill(255,255,255);
        text('Skullman Adventures', width/2, height/2);
        textSize(30);
        text('Press Up', width/2, height/2 + 100);
    }


    teclar(key) {
        if (key === "ArrowUp") {
            this._alteraCena();
        }
    }

    _alteraCena(){
        cenaAtual = 'jogo';
    }

}