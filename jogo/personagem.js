class Personagem extends Animacao {

    constructor(imagem, qtdSprites,frameRate, xRender, yRender, escala, larguraSprite, alturaSprite) {
        super(imagem, qtdSprites,frameRate, xRender, yRender, escala, larguraSprite, alturaSprite);

        this.velocidadeX = 10;
        this.velocidadeDoPulo = 0;

        this.pulos = 0;

        this.yInicial = this.yRender;
        this.yRender = this.yInicial;

        this.invencibilidade = false;

    }

    pula(somPulo) {
        if (this.yRender == this.yInicial) {
            this.velocidadeDoPulo -= 50;
            somPulo.play(undefined, 1);
        }

        else if (this.pulos < 1) {
            this.pulos++;
            this.velocidadeDoPulo -= 50;
            somPulo.play(undefined, 2);
        }

    }

    aplicaGravidade() {
        this.yRender += this.velocidadeDoPulo;
        this.velocidadeDoPulo += this.gravidade;

        if (this.yRender >= this.yInicial) {
            this.yRender = this.yInicial;
            this.velocidadeDoPulo = 0;
        }

        if (this.yRender == this.yInicial) {
            this.pulos = 0;
        }
    }

    tornarInvencivel(){
        this.invencibilidade = true;
        setTimeout(() => {
            this.invencibilidade = false;
        }, 1000)
    }

    estaColidindo(inimigo) {

        if ( this.invencibilidade ){
            return false;
        }

        const colisao = collideRectRect(this.xRender, this.yRender, this.sprite.larguraRender() , this.sprite.alturaRender() ,
            inimigo.xRender, inimigo.yRender, inimigo.sprite.larguraRender() , inimigo.sprite.alturaRender());

        return colisao;
    }

}
