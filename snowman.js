function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(20);

    rect(0, 500, 600, 100);

    var x = 300;
    var y = 450;
    var width = 200;
    var height = 200;
    ellipse(x, y, width, height);

    var middleScale = 50;
    var middleOffset = 150;
    ellipse(x, y-middleOffset, width-middleScale, height-middleScale);

    var topScale = 100;
    var topOffset = 250;
    ellipse(x, y-topOffset, width-topScale, height-topScale);
}

