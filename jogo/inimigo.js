class Inimigo extends Animacao {
    constructor(imagem, qtdSprites,frameRate, xRender, yRender, escala, larguraSprite, alturaSprite, velocidadeX) {
        super(imagem, qtdSprites,frameRate, xRender, yRender, escala, larguraSprite, alturaSprite);
        this.velocidadeX = velocidadeX;
    }

    move() {
        this.xRender = this.xRender - this.velocidadeX;
    }

    estaVisivel() {
        return (this.xRender < -this.sprite.larguraRender());
    }

    aparece() {
        this.xRender = width;
    }
}
