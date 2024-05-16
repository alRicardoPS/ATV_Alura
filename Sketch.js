console.log("JS ping pong by Ricardo PS")

//variáveis da bolinha
let xBol = 100;
let yBol = 200;
let diametro = 20;
let raio = diametro / 2;

//variáveis do oponente
let xRaqOponente = 585;
let yRaqOponente = 150;

//velocidade da bolinha
let velXBol = 6;
let velYBol = 6;

//variáveis da raquete
let xRaq = 5;
let yRaq = 150;
let raqComprimento = 10;
let raqAltura = 90;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;


let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
    background(30);
    mostBol();
    movBol();
    verColisaoBorda();
    mostRaq(xRaq, yRaq);
    movMinhaRaq();
    verColisaoRaq(xRaq, yRaq);
    verColisaoRaq(xRaqOponente, yRaqOponente);
    mostRaq(xRaqOponente, yRaqOponente);
    movRaqOponente();
    incluiPlacar() 
    marcaPonto();
}
function mostBol() {
  circle(xBol, yBol, diametro);
}

function movBol() {
  xBol += velXBol;
  yBol += velYBol;
}

function verColisaoBorda() {
  if (xBol + raio > width || xBol - raio < 0) {
    velXBol *= -1;
  }
  if (yBol + raio > height || yBol - raio < 0) {
    velYBol *= -1;
  }
}

function mostRaq(x,y) {
    rect(x, y, raqComprimento, raqAltura);
}

function movMinhaRaq() {
  if(keyIsDown(UP_ARROW)) {
    yRaq -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaq += 10;
  }
}

function verColisaoRaq() {
  if (xBol - raio < xRaq + raqComprimento && yBol - raio < yRaq + raqAltura && yBol + raio > yRaq) {
    velXBol *= -1;
  }
}

function verColisaoRaq(x, y) {
    colidiu = collideRectCircle(x, y, raqComprimento, raqAltura, xBol, yBol, raio);
    if (colidiu){
        velXBol *= -1;
  }
}

function movRaqOponente() {
    velYOponente = yBol - yRaqOponente - raqComprimento / 2 - 30;
    yRaqOponente += velYOponente
}


function incluiPlacar(){
  stroke(255)
    textAlign(CENTER);
    textSize(16);
  
    fill(color(255,100, 0));
    rect(100, 5, 50, 30);
    fill(255);
    text(meusPontos, 125, 26);
  
    fill(color(90,90,90 ));
    rect(445, 5, 50, 30);
    fill(205);
    text(pontosDoOponente, 470, 26);

}

function marcaPonto() {
  if (xBol > 580) {
    meusPontos += 1;
  }
  if (xBol < 10) {
    pontosDoOponente += 1;
  }
  
}

