

// Utilizando JS, faça o controle de uma imagem por meio da posição do ponteiro do mouse. A imagem deve seguir o ponteiro do mouse.    O ponteiro do mouse deve estar centralizado na imagem.        A imagem não pode, jamais, desaparecer do canvas, mesmo se o mouse sair do canvas 

class Quadrado {
    constructor (x, y, l, a, cor1, cor2) {
        this.x = x;
        this.y = y;
        this.l = l;
        this.a = a;
        this.cor1 = cor1;
        this.cor2 = cor2;
    }
    desenha() {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.fillStyle = this.cor1;
        ctx.strokeStyle = this.cor2;
        ctx.strokeRect(this.x, this.y, this.l, this.a);
        ctx.fillRect(this.x, this.y, this.l, this.a);
        ctx.closePath();
    }
}

let canva1 = document.getElementById("canva1");
let ctx = canva1.getContext("2d");

let quadrado = new Quadrado(10,10,35,35, "pink", "blue");

quadrado.desenha();

let auxiliar = 1;
function animacao() {
    //apaga canvas
    ctx.clearRect(0,0, 300, 300);
    //desenha novamente 
    quadrado.desenha();
    requestAnimationFrame(animacao);

}
animacao();


document.addEventListener("mousemove", function(evento) {
    console.log(evento);
    let rect = canva1.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;

    let novox = x_mouse -(quadrado.l / 2)

    let novoy = y_mouse -(quadrado.a / 2)


    let limiteD = canva1.width - quadrado.l;

    let limiteB = canva1.height - quadrado.a;

    if (novox < 0) { novox = 0; } 

    else if (novox > limiteD) { novox = limiteD; }

    if (novoy < 0) { novoy = 0; } 
    else if (novoy > limiteB) { novoy = limiteB; }



    quadrado.x = novox;
    quadrado.y = novoy;

})