//a tool for drawing straight lines to the screen. Allows the user to preview
//the a line to the current mouse position before drawing the line to the 
//pixel array.
function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
	var widthSlider;
	var widthText
	let width;
	var added = false;
	//draws the line to the screen 

	this.addToolOptions = function(){
		if (added == false){

			if (width == null){
				width = 1
			}
			widthSlider = createSlider(1, 10, width, 1)
			width = widthSlider.value()
			this.changeWidthText();
			added = true;
		}
	}


	this.changeWidthText = function(){
		if (widthText != null){
			widthText.remove();
		}
		widthText = createDiv("<h4>Line Width : " + width + " <\h4>");
		widthText.child(widthSlider);
		widthText.addClass("toolElement");
		var p = select("#toolOptions")
		widthText.parent(p)
	}


	this.removeToolOptions = function(){
		if (added == true){
			var c = selectAll(".toolElement");
			for (var i = 0; i < c.length; i++){
				c[i].remove();
			}
		}
		added = false;
		strokeWeight(1)
	}


	this.draw = function(){
		oldval = width;
		width = widthSlider.value();
		if (oldval != width){
			this.changeWidthText();
		}
		strokeWeight(width)
		//only draw when mouse is clicked
		if(mouseIsPressed){
			//if it's the start of drawing a new line
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				//save the current pixel Array
				loadPixels();
			}

			else{
				//update the screen with the saved pixels to hide any previous
				//line between mouse pressed and released
				updatePixels();
				//draw the line
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		else if(drawing){
			//save the pixels with the most recent line and reset the
			//drawing bool and start locations
			loadPixels();
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
