/*  **********************************************************
    **                     Ruimteschip                      **
    ********************************************************** */


class Hero {
    constructor(l) {
        this.x = 100;
        this.y = random(100, canvas.height - 100);
        this.d = 60;
        this.v = 4.5;
        this.raket = raketNormaal;
    }

    beweeg() {
        if (keyIsDown(DOWN_ARROW)) {
            this.y += this.v;
        }
        if (keyIsDown(UP_ARROW)) {
            this.y -= this.v;
        }
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= this.v - 1;
            this.raket = raketLangzaam;
        }
        else {
            this.raket = raketNormaal;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.x += this.v;
            this.raket = raketSnel;
        }
        this.x += this.v;
        this.x = constrain(this.x, 0, canvas.width);
        this.y = constrain(this.y, 100, canvas.height - 100);
    }

    teken() {
        push();
        noStroke();
        imageMode(CENTER)
        image(this.raket, this.x + 5, this.y + 5, this.d + 140, this.d + 60);
        pop();
    }

}
