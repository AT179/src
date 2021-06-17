function setup() {
    createCanvas(600, 600);
}

var x = 100;

draw = function() {
    background(10, 10, 10);

    // Mouse circle
    strokeWeight(3);
    stroke(255, 0, 0);
    fill(0, 255, 0);
    ellipse(mouseX, mouseY, 20, 20);

    // Big flying circle
    strokeWeight(8);
    stroke(57, 0, 214);
    fill(0, 210, 247);
    ellipse(x, 200, 100, 100);
    x += 1;
    if(x > 500) {
        x = 100;
    }


}
