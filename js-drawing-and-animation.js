function setup() {
    createCanvas(600, 600);
    background(10, 10, 10);
}


// var resetText = "RESET";
var avgValArray = [];
var maxVal = -5;
var minVal = 10;
var flag = 1;
console.log("hello world!");

draw = function() {

    // background(10, 10, 10);
    

    if (flag === 1) {
        var randNum = Math.floor(random(0, 3));
        flag = 0;
    }
    
    textSize(50);
    strokeWeight(1);
    stroke(0, 0, 0);
    fill(100, 200, 0);
    // text(randNum.toString(), 100, 100);
    text(randNum, 100, 100);
    

    // if length avgValArray is > 100 delete the first entry
    // and append another to the end

    avgValArray.push(randNum);
    if(avgValArray.length > 100) {
        avgValArray.splice(0, 1);
    }
    // console.log(avgValArray);

    // calculate average
    
    textSize(50);
    strokeWeight(1);
    stroke(0, 0, 0);
    fill(100, 200, 0);
    text("abc", 100, 150);


}

//     // Draw a reset button every time the loop is gone through
//     strokeWeight(1);
//     stroke(255, 255, 255);
//     fill(255, 130, 0);
//     rect(20, 20, 100, 40);

//     textSize(25);
//     strokeWeight(1);
//     stroke(0, 0, 0);
//     fill(0, 0, 0);
//     text(resetText, 29, 48);

//     // Draw if mouse is pressed

//     if (mouseY >= 20 && mouseY <= 60) {
//         if (mouseX >= 20 && mouseX <= 120) {
//             strokeWeight(1);
//             stroke(255, 255, 255);
//             fill(0, 0, 255);
//             rect(20, 20, 100, 40);

//             textSize(25);
//             strokeWeight(1);
//             stroke(0, 0, 0);
//             fill(255, 255, 255);
//             text(resetText, 29, 48);
//         }
//     }

//     if (mouseIsPressed) {
//         if (mouseY >= 20 && mouseY <= 60) {
//             if (mouseX >= 20 && mouseX <= 120) {
//                 background(10, 10, 10);
//             }
//         }
//         strokeWeight(0);
//         fill(255, 255, 255);
//         ellipse(mouseX, mouseY, 20, 20);
//     }
// }

// // TODO: make the text and button relative to one another
// // Make drawing smoother
// // Make the reset button not disappear on reset button click
// // Add color pallet

// // TODO: add a random acceleration componet
