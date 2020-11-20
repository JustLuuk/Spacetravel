var achtergronden = [];

function preload() {
    achtergrondmuziek = loadSound("sounds/saxophone.mp3");
    astro1 = loadImage("images/astro1.png");
    astro2 = loadImage("images/astro2.png");
    raketLangzaam = loadImage("images/raketLangzaam.png");
    raketNormaal = loadImage("images/raketNormaal.png");
    raketSnel = loadImage("images/raketSnel.png");
    // Achtergonden op volgorde    
    achtergronden.push(loadImage("images/aarde-mars.png"));
    achtergronden.push(loadImage("images/zon.png"));        //zon
    achtergronden.push(loadImage("images/mercury.png"));    //mercury
    achtergronden.push(loadImage("images/venus.png"));      //venus
    achtergronden.push(loadImage("images/aarde-mars.png")); //aarde mars
    achtergronden.push(loadImage("images/jupiter.png"));    //jupiter
    achtergronden.push(loadImage("images/saturnus.png"));   //saturnes
    achtergronden.push(loadImage("images/uranus.png"));     //uranus
    achtergronden.push(loadImage("images/Neptunes.png"));   //neptunes
    achtergronden.push(loadImage("images/zwart gat.png"));  //zwart gat
    achtergronden.push(loadImage("images/melkweg.png"));    //melkweg
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(RGB,255,255,255,1);
    textFont("Monospace");
    textSize(44);
    textAlign(CENTER,CENTER);  
    frameRate(50);
    spel = new SpaceTravel();
    spel.nieuwSpel();
}

function draw() {
    background(achtergronden[spel.level]);
    if (spel.actief && !spel.levelGehaald) {
        spel.update();
    }
    spel.teken();
}

function keyTyped() {
  if (!spel.actief && !spel.levelGehaald) {
    // begin spel
    spel.actief = true;
    achtergrondmuziek.loop();
  }
  if ((spel.levelGehaald && !spel.afgelopen) && keyCode == ENTER) {
    // level gehaald tijdens het spel
    spel.nieuwLevel();
  }
  if ((spel.afgelopen) && keyCode == 32) {
    // einde spel => 32 = ENTER 
    achtergrondmuziek.stop();
    spel.nieuwSpel();
  }  
  }
