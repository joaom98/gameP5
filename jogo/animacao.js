class Animacao {
    constructor( imagem, qtdSprites, xRender, yRender, larguraRender, alturaRender, larguraSprite, alturaSprite )  {
        this.imagem = imagem;
        this.qtdSprites = qtdSprites;
        this.xRender = xRender;
        this.yRender = height - yRender - 20;
        this.larguraRender = larguraRender;
        this.alturaRender = alturaRender;
        this.larguraSprite = larguraSprite;
        this.alturaSprite = alturaSprite;
        this.frameAtual = 0; 
        this.gravidade = 6;
    }
    
    exibe(){
        let x = ( this.frameAtual % this.qtdSprites[0] ) * this.larguraSprite;
        let y = Math.floor(this.frameAtual / this.qtdSprites[0] ) * this.alturaSprite;
        
        image(this.imagem, this.xRender, this.yRender, this.larguraRender, this.alturaRender, x, y, this.larguraSprite, this.alturaSprite);
        
        this.anima();
    }
    
    anima(){
        this.frameAtual++;
        
        this.frameAtual = this.frameAtual % ( this.qtdSprites[0] * this.qtdSprites[1] )  ;
        
    }
    
}
