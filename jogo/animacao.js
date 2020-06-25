class Animacao {
    constructor( imagem, qtdSprites, xRender, yRender, larguraRender, alturaRender, larguraSprite, alturaSprite )  {
        
        this.sprite = new Sprite(imagem, qtdSprites, larguraSprite, alturaSprite);
        
        this.xRender = xRender;
        this.yRender = height - yRender - 20;
        this.larguraRender = larguraRender;
        this.alturaRender = alturaRender;
        this.gravidade = 6;
        
    }
    
    exibe(){
        
        //image(this.imagem, this.xRender, this.yRender, this.larguraRender, this.alturaRender, x, y, this.larguraSprite, this.alturaSprite);
        this.sprite.desenhaSprite( this.xRender, this.yRender, this.larguraRender, this.alturaRender )
        
        this.anima();
    }
    
    anima(){
        
        this.sprite.avancaFrame();
        
    }
    
}
