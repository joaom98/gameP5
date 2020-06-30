class Sprite {

    constructor(imagem, qtdSprites,frameRate , escala, larguraSprite, alturaSprite) {
        this.imagem = imagem;
        this.qtdSprites = qtdSprites;
        this.frameRate = frameRate;
        this.escala = escala;
        this.larguraSprite = larguraSprite;
        this.alturaSprite = alturaSprite;

        this.frameAtual = 0;

        this.taxaAtualização = this.frameRate/ configs.gerais.frameRate;
        this.flagAtualização = 0;
    }

    desenhaSprite(xRender, yRender) {

        let x = (this.frameAtual % this.qtdSprites[0]) * this.larguraSprite;
        let y = Math.floor(this.frameAtual / this.qtdSprites[0]) * this.alturaSprite;

        image(this.imagem, xRender, yRender,
            this.larguraSprite * this.escala,
            this.alturaSprite * this.escala,
            x, y, this.larguraSprite, this.alturaSprite);

    }


    alturaRender(){
        return this.alturaSprite * this.escala;
    }


    larguraRender(){
        return this.larguraSprite * this.escala;
    }

    avancaFrame() {

        this.flagAtualização += this.taxaAtualização;

        if ( this.flagAtualização > 1 ) {
            this.frameAtual++;
            this.flagAtualização = 0;
        }
        
        this.frameAtual = this.frameAtual % (this.qtdSprites[1]);

    }

}
