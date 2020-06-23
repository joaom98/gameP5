class Personagem extends Animacao{
    
    constructor(imagem, qtdSprites, xRender, yRender, larguraRender, alturaRender, larguraSprite, alturaSprite) {
        super(imagem, qtdSprites, xRender, yRender, larguraRender, alturaRender, larguraSprite, alturaSprite);
        
        this.velocidadeX = 10;
        this.velocidadeDoPulo = 0;
        
        this.doubleJump = 0;
        
        this.yInicial = this.yRender;
        this.yRender = this.yInicial;
        
    }
    
    pula(somPulo){
        if ( this.yRender == this.yInicial ) {
            this.velocidadeDoPulo -= 50;
            somPulo.play(undefined, 1);
        }
        
        else if ( this.doubleJump == 0 ) {
            this.doubleJump++;
            this.velocidadeDoPulo -= 50;
            somPulo.play(undefined, 2);
        }
        
    }
    
    aplicaGravidade(){
        this.yRender += this.velocidadeDoPulo;
        this.velocidadeDoPulo += this.gravidade;
        
        if ( this.yRender >= this.yInicial ) {
            this.yRender = this.yInicial;
            this.velocidadeDoPulo = 0;
        }
        
        if ( this.yRender == this.yInicial ) {
            this.doubleJump = 0;
        }
    }
    
    estaColidindo( inimigo ){
       const precisao = 0.7;
       const colisao = collideRectRect(this.xRender, this.yRender, this.larguraRender * precisao, this.alturaRender * precisao,
        inimigo.xRender, inimigo.yRender, inimigo.larguraRender * precisao , inimigo.alturaRender * precisao);
        
        return colisao;
    }
    
}
