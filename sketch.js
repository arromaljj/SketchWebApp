//global variables that will store the toolbox colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;
a = false;
var state = []
x = 0
function setup() {

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");

	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	colourP = new ColourPalette();

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new mirrorDrawTool());
	background(255);
	angleMode(DEGREES);
}

function draw() {
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user

	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}

	// select("#content").mouseReleased(function(){
	// 	if (b == false){
	// 	console.log("came here");
	// 	push();
	// 	translate(50,50)
	// 	// background(255);
		
	// 	b = true;
	// 	}
	// })
	
	// if (a = true){
	// 	pop();
	// 	a = false;
	// }
	
}

// function keyPressed(){
// 	if (keyCode == 38){
		
// 		a = true;
// 		console.log("popped");
// 	}
// }


// select("#content").mouseReleased(function(){
// 	push();
// });



// function keyReleased(){
	
// 	if (toolbox.selectedTool.name == "sprayCanTool"){
// 		spray = toolbox.selectedTool;
// 		if (keyCode == 38){
// 			spray.changeSpread(1);
// 		}
// 		else if (keyCode == 40){
// 			spray.changeSpread(-1);
// 		}
		
// 	}
	
	
// }