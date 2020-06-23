class Inimigo extends Animacao{
    constructor(imagem, qtdSprites, xRender, yRender, larguraRender, alturaRender, larguraSprite, alturaSprite) {
    super(imagem, qtdSprites, xRender, yRender, larguraRender, alturaRender, larguraSprite, alturaSprite);
    this.velocidadeX = 10;
    }
    
    move(){
        this.xRender = this.xRender - this.velocidadeX;
        
        if ( this.xRender < - this.larguraRender ) {
            this.xRender = width;
        }
    }
}
