class Animacao {
    constructor(imagem, qtdSprites,frameRate, xRender, yRender, escala, larguraSprite, alturaSprite) {

        this.sprite = new Sprite(imagem, qtdSprites,frameRate, escala, larguraSprite, alturaSprite);

        this.xRender = xRender;
        this.yRender = height - yRender - this.sprite.alturaRender() - configs.cenario.alturaChao;
        
        this.gravidade = 6;

    }

    exibe() {

        //image(this.imagem, this.xRender, this.yRender, this.larguraRender, this.alturaRender, x, y, this.larguraSprite, this.alturaSprite);
        this.sprite.desenhaSprite(this.xRender, this.yRender)

        this.anima();
    }

    anima() {

        this.sprite.avancaFrame();

    }

}
