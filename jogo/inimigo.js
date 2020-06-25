class Inimigo extends Animacao{
    constructor(imagem, qtdSprites, xRender, yRender, larguraRender, alturaRender, larguraSprite, alturaSprite, velocidadeX, delay) {
    super(imagem, qtdSprites, xRender, yRender, larguraRender, alturaRender, larguraSprite, alturaSprite);
    this.velocidadeX = velocidadeX;
    this.delay = delay;
    }
    
    move(){
        this.xRender = this.xRender - this.velocidadeX;
        
        if ( this.xRender < - this.larguraRender - this.delay ) {
            this.xRender = width;
        }
    }
    
    estaVisivel(){
        return ( this.xRender < -this.larguraRender ) ;
    }
}
