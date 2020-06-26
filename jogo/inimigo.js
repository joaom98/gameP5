class Inimigo extends Animacao {
    constructor(imagem, qtdSprites, xRender, yRender, larguraRender, alturaRender, larguraSprite, alturaSprite, velocidadeX) {
        super(imagem, qtdSprites, xRender, yRender, larguraRender, alturaRender, larguraSprite, alturaSprite);
        this.velocidadeX = velocidadeX;
    }

    move() {
        this.xRender = this.xRender - this.velocidadeX;
    }

    estaVisivel() {
        return (this.xRender < -this.larguraRender);
        //return (this.xRender > 0);
    }

    aparece() {
        this.xRender = width;
    }
}
