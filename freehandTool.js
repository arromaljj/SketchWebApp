function FreehandTool(){
	//set an icon and a name for the object
	this.icon = "assets/freehand.jpg";
	this.name = "freehand";

	//to smoothly draw we'll draw a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are -1 to start with because
	//we haven't started drawing yet.
	var previousMouseX = -1;
	var previousMouseY = -1;
	let width;
	var widthText;
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
		strokeWeight(1);
	}

	this.draw = function(){
		
		oldVal = width;
		width = widthSlider.value();
		if (width != oldVal){
			this.changeWidthText();
		}
		strokeWeight(width)

		//if the mouse is pressed
		if(mouseIsPressed){
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			
		
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else{
				line(previousMouseX, previousMouseY, mouseX, mouseY);
					
				// line(previousMouseX - random(-5, 5) , previousMouseY + random(-5, 5), mouseX, mouseY);
				// line(previousMouseX - random(-7, 7) , previousMouseY + random(-7, 7), mouseX, mouseY);
				// line(previousMouseX - random(-3, 3) , previousMouseY + random(-3, 3), mouseX, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		
		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		//try and comment out these lines and see what happens!
		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
	};
}