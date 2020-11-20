/*  **********************************************************
    **                       SpaceTravel                    **
    ********************************************************** */


class SpaceTravel {
    constructor() {
    this.level = null;
    this.maxLevel = 10;
    this.actief = null;
    this.levelGehaald = null;
    this.afgelopen = null;
    this.gewonnen = null;
    this.speler = null;
    this.vijanden = null;
    this.raak = 0;
  }
  
  nieuwSpel() {
    this.level = 0;
    this.actief = false;
    this.gewonnen = false;
    this.afgelopen = false;
    this.nieuwLevel();
  }

  nieuwLevel() {
    this.level++;
    this.levelGehaald = false;
    this.speler = new Hero(this.level);
    this.vijanden = [];
    for (var v = 0; v <= this.level*1.2; v++) {
        this.vijanden.push(new Vijand1(this.level));
        this.vijanden.push(new Vijand2(this.level));
    }
 
  }

  update() {
    for (var v = 0; v < this.vijanden.length; v++) {
        this.vijanden[v].beweeg();
        if (this.vijanden[v].raakt(this.speler)) {
            spel.afgelopen = true;
            spel.actief = false;
            this.raak++;
        }
    }
    this.speler.beweeg();
    if (this.speler.x >= canvas.width - 100) {
        this.levelGehaald = true;
        if (this.level == this.maxLevel) {
            spel.afgelopen = true;
            spel.gewonnen = true;
            spel.actief = false;
        }
    }
  }

   tekenSpeltoestand() {
    this.speler.teken();
    for (var v = 0; v < this.vijanden.length; v++) {
        this.vijanden[v].teken();
    }       
  }

  tekenScorebord() {
    push();
    fill(0,0,0,.8);
    noStroke();
    textSize(30);
    var marge = 100;
    fill(255);
    text("Wave "+this.level,marge,marge,canvas.width*1.7);   
    pop();
  }


  
  beginScherm() {
    push();
    noFill();
    stroke(150,200,255,.7);
    strokeWeight(5);
    textSize(140);
    text("SpaceTravel",0,0,canvas.width,canvas.height * 2 / 3);
    textSize(32);
    strokeWeight(2);
    fill(0,0,0,0.75);
    text("Druk op een toets om te beginnen. (niet de pijltjes)\n\n je beweegd met behulp van de pijltjes toetsen.\n\n Er zijn 10 verschillende waves",0,canvas.height * 1 / 2,canvas.width,canvas.height * 1 / 3);
    pop();
  }

  levelScherm() {
    push();
    fill(50,80,80,.5);
    stroke(150,200,255,.7);
    strokeWeight(3);
    text('Gefeliciteerd!\nJe hebt Golf '+this.level+' gehaald!\n\nDruk op ENTER',0,0,canvas.width,canvas.height / 2);
    pop();
  }

  eindScherm() {
    var tekst = 'Het spel is afgelopen.';
    if (this.gewonnen) {
      tekst = 'Gefeliciteerd!';
   
    }
    else {
        tekst += '\nHelaas: je bent af.\n\n Je hebt '+this.level+' waves gespeeld';
    }
    push();
    fill(0);
    stroke(100,75,50,.8);
    strokeWeight(3);
    text(tekst + '\n\nDruk SPATIE voor nieuw spel.',0,0,canvas.width,canvas.height);
    pop();
  }    
  
  teken() {
    if (!this.actief) {
        if (this.afgelopen) {
            this.eindScherm();
        }
        else {
            this.beginScherm();
        }
    }
    else {
        if (this.levelGehaald) {
            this.levelScherm();
        }
        else {
            this.tekenScorebord();
            this.tekenSpeltoestand();
        }
    }
  }
}