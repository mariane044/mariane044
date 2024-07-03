let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let raio = diametro/2;
let velocidadeXBolinha = 8;
let velocidadeYBolinha = 8;

function setup() {
  createCanvas(600, 400);
}

function draw(){
  background(0);
circle(xBolinha, yBolinha, 30)
 xBolinha += velocidadeXBolinha;
   yBolinha += velocidadeYBolinha;

  minhaRaquete()
  
  
  
  
  
  if (xBolinha + raio > width ||xBolinha - raio <0){
     velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > heigth||yBolinha - raio <0){
     velocidadeYBolinha*= -1;
  }
}
  if (xBolinha > width|| xBolinha < 0){
  velocidadeXBolinha *= -1;  

}}