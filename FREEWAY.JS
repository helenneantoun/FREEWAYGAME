//ator
let xAtor = 10
let yAtor = 380
let colisao = false
let meusPontos = 0

//////////////////////////////////////////////////////////////

//Mostrar Ator
function mostraAtor(){
 image(imagemDoAtor, xAtor,yAtor,20,20)
}

/////////////////////////////////////////////////////////////

//Movimento do Ator
function movimentaAtor(){
if(keyIsDown(UP_ARROW)){yAtor -= 2}
if(keyIsDown(DOWN_ARROW)){
  if(podeSeMovimentar()){
  yAtor += 2}}
  
  
if(keyIsDown(LEFT_ARROW)){
  if(podeSeMovimentar1()){
  xAtor -= 2}}
  
  
if(keyIsDown(RIGHT_ARROW)){
  if(podeSeMovimentar2()){
  xAtor += 2}}
}

//////////////////////////////////////////////////////////////

//Colisao Carros Faixa 1
function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, (xAtor+15), (yAtor + 15), 15)
    if (colisao){
      colidiu();
      somColisao.play()
      if (pontosMaiorZero()){
      meusPontos -=1}
  }
}
}
 
function colidiu(){
  yAtor = 380
  xAtor = 10
}

///////////////////////////////////////////////////////////////

//Colisao Carros Faixa 2
function verificaColisaoR(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarrosR.length; i++){
    colisaoR = collideRectCircle(xCarrosR[i], yCarrosR[i], comprimentoCarros, alturaCarros, (xAtor + 15), (yAtor + 15), 15)
    if (colisaoR){
      colidiuR();
      somColisao.play()
    if (pontosMaiorZero()){
      meusPontos -=1}
  }
}
}
 
function colidiuR(){
  yAtor = 380
  xAtor = 10
}

////////////////////////////////////////////////////////////////

//Pontos Na tela
function incluiPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(color(255,0,0))
  text(meusPontos, width / 5, 21)
}

//Almentar pontos
function marcaPontos(){
  if (yAtor < 15){meusPontos +=1;
  somPontos.play()
 colidiu()
 }
}

//Verifica Se Pontos Menor ou Maior que zero
function pontosMaiorZero(){
 return meusPontos > 0}

/////////////////////////////////////////////////////////////

//Evasao das Extremidades
function podeSeMovimentar(){
  return yAtor < 380;}

function podeSeMovimentar1(){
  return xAtor > 0;}

function podeSeMovimentar2(){
  return xAtor < 480;}
 