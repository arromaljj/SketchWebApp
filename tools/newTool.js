function NewTool() {
  this.icon = 'assets/NewTool.png';
  this.name = 'newTool';
  this.max = 0;
  this.switch = false;
  this.r = 40;
  this.g = 100;
  this.b = 200;
  this.draw = function() {
    if (mouseIsPressed) {
      loadPixels();
      pixelDensity(1);
      index = 0;
      for (var j = 0; j < height; j++) {
        for (var i = 0; i <= width; i++) {
          index = j * width * 4 + i * 4;
          if (index % 7 == 0){
            pixels[index] = loopVal(this.r, 0, 255);
            pixels[index + 1] = loopVal(this.g, 0, 255);
            pixels[index + 2] = loopVal(this.b, 0, 255);
            // this.r += 1;
            // this.g += 1;
            // this.b += 1;
          }
          //   pixels[index + 3] = this.colorComp % 255;
        }
      }

      console.log(this.colorComp);
      updatePixels();
    }
  };
}

function loopVal(value, min, max){
    return min + abs(value % (max - min)) 
}

// function loopValCon(value, min, max){
//     if (value >= max){
//         return (max - (value % (max - min)));
//     } else if (value >= min) {
//         return (value);
//     } else {
//         return (min + ())
//     }
// }