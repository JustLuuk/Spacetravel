/*  **********************************************************
    **                       astroiden                      **
    ********************************************************** */


class Vijand1 {
  constructor(l) {
      this.x = canvas.width;
      this.y = random(100,canvas.height - 100);
      this.d = 50;
      this.v = 3 + random (3*l);

  }

  beweeg() {
    this.x -= this.v;
  }

  raakt(s) {
      if (dist(this.x,this.y,s.x,s.y) <= (this.d + s.d) / 2) {
          return true;
      }
      else {
          return false;
      }
  }

  teken() {
      push();
      noStroke();
      imageMode(CENTER);
      image(astro1, this.x, this.y, this.d + 10, this.d);
      pop();
  }
}

class Vijand2 {
  constructor(l) {
      this.x = canvas.width;
      this.y = random(100,canvas.height - 100);
      this.d = 50;
      this.v = 3 + random (3*l);
  }

  beweeg() {
    this.x -= this.v;
  }

  raakt(s) {
      if (dist(this.x,this.y,s.x,s.y) <= (this.d + s.d) / 2) {
          return true;
      }
      else {
          return false;
      }
  }

  teken() {
      push();
      noStroke();
      imageMode(CENTER);
      image(astro2, this.x, this.y, this.d, this.d);
      pop();
  }
}
