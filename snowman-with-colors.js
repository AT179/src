function setup() {
    createCanvas(600, 600);
}

function draw() {

    // This turns off outlines (supposedly)
    noStroke();

    // R G B
    background(20, 0, 0);
    strokeWeight(1);

    // ground
    stroke(10, 10, 10);
    fill(10, 10, 10);
    rect(0, 500, 600, 100);

    // Bottom Circle
    fill(0, 255, 0);
    var x = 300;
    var y = 450;
    var width = 200;
    var height = 200;
    ellipse(x, y, width, height);

    // Middle Circle
    fill(255, 255, 0);
    var middleScale = 50;
    var middleOffset = 150;
    ellipse(x, y-middleOffset, width-middleScale, height-middleScale);

    // Top Circle
    fill(0, 0, 255);
    var topScale = 100;
    var topOffset = 250;
    ellipse(x, y-topOffset, width-topScale, height-topScale);

    // Left Arm
    strokeWeight(20);
    stroke(141, 92, 62);
    line(230, 260, 100, 200);

    // Right Arm
    strokeWeight(20);
    stroke(141, 92, 62);
    line(370, 260, 500, 200);

}

