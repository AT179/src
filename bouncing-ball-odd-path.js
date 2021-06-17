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

var xMax = 600;
var yMax = 600;
var xMin = 0;
var yMin = 0;

var xLoc = xMax-100;
var xCtrUp = 0;
var yLoc = yMax;
var yCtrUp = 0;
var xInc = 1;
var yInc = 1;

var cirHeight = 30;
var cirWidth = cirHeight;

draw = function() {

    background(10, 10, 10);

    // define circle
    strokeWeight(1);
    stroke(255, 255, 255);
    fill(0, 0, 0,);
    ellipse(xLoc, yLoc, cirHeight, cirWidth);
    [xLoc, xCtrUp] = floatDirection(
        xLoc,
        xCtrUp,
        Math.ceil(Math.abs(((yMax/2)-yLoc)/100))+1,
        xMax,
        xMin);
    [yLoc, yCtrUp] = floatDirection(
        yLoc,
        yCtrUp,
        Math.ceil(Math.abs(((xMax/2)-xLoc)/100))+2,
        yMax,
        yMin);
}
