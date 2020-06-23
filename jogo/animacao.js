class Animacao {
    constructor( imagem, qualSprite, xRender, yRender, larguraRender, alturaRender, larguraSprite, alturaSprite )  {
        this.imagem = imagem;
        this.qualSprite = qualSprite;
        this.xRender = xRender;
        this.yRender = height - yRender;
        this.larguraRender = larguraRender;
        this.alturaRender = alturaRender;
        this.larguraSprite = larguraSprite;
        this.alturaSprite = alturaSprite;
        this.frameAtual = 0; 
    }
    
    exibe(){
        let x = this.frameAtual % 4 * this.larguraSprite;
        let y = Math.floor(this.frameAtual / 4) * this.alturaSprite;
        
        image(this.imagem, this.xRender, this.yRender, this.larguraRender, this.alturaRender, x, y, this.larguraSprite, this.alturaSprite);
        
        this.anima();
    }
    
    anima(){
        this.frameAtual++;
        
        this.frameAtual = frameAtual % 15;
        //if (this.frameAtual > 15) {
        //    this.frameAtual = 0;
        //}
    }
    
}
