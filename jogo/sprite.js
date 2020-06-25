class Sprite {

    constructor( imagem, qtdSprites, larguraSprite, alturaSprite ){
         this.imagem = imagem;
         this.qtdSprites = qtdSprites;
         this.larguraSprite = larguraSprite;
         this.alturaSprite = alturaSprite;
         
         this.frameAtual = 0;
         
    }
    
    desenhaSprite( xRender, yRender, larguraRender, alturaRender ){
        
        let x = ( this.frameAtual % this.qtdSprites[0] ) * this.larguraSprite;
        let y = Math.floor( this.frameAtual / this.qtdSprites[0] ) * this.alturaSprite;
        
        image( this.imagem, xRender, yRender, larguraRender, alturaRender, x, y, this.larguraSprite, this.alturaSprite);
    
    }
    
    avancaFrame() {
        
        this.frameAtual++;
        
        this.frameAtual = this.frameAtual % ( this.qtdSprites[1] )  ;
    
    }

}
