    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}


function marcaPonto() {
    if (xBolinha > 591) {
        meusPontos += 1;
      ponto.play()
    }
    if (xBolinha < 9) {
        pontosDoOponente += 1;
      ponto.play()
    }
}
  

  
 
