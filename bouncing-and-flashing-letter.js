function setup() {
    createCanvas(600, 600);
}

var floatDirection = function(loc, ctrDir, inc, maxLoc, minLoc) {
    if(ctrDir) {
        loc += inc;
        if(loc >= maxLoc) {
            ctrDir = 0;
        }
    } else {
        loc -= inc;
        if(loc <= minLoc) {
            ctrDir = 1;
        }
    }
    return [loc, ctrDir];
};

var x = 100;

var xMax = 500;
var yMax = 550;
var xMin = 50;
var yMin = 100;

var xTextLoc = xMax;
var xCtrUp = 0;
var yTextLoc = yMax;
var yCtrUp = 0;
var xInc = 4;
var yInc = 3;

var floatingText = "A";

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

    // Text
    textSize(40);
    strokeWeight(0.5);
    stroke(255, 255, 255);
    fill(xTextLoc % 255, yTextLoc % 255, xTextLoc % 255);
    text(floatingText, xTextLoc, yTextLoc);

    [xTextLoc, xCtrUp] =  floatDirection(xTextLoc, xCtrUp, xInc, xMax, xMin);
    [yTextLoc, yCtrUp] =  floatDirection(yTextLoc, yCtrUp, yInc, yMax, yMin);
}

// mouseMoved is a special JS function that can be used like draw


