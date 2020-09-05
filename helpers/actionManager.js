function actionManager() {

	this.drawState = [];
	this.redoState = [];
	this.lock = false;
	this.switch = false;
	this.add = function (history) {
		this.redoState = [];
		this.drawState.push(history)
	};
	this.clear = function () {
		this.drawState.push('clear');
	}
	this.undo = function () {
		this.redoState.push(this.drawState.pop());
		this.render();
	}
	this.redo = function () {
		if (this.redoState.length != 0) {
			this.drawState.push(this.redoState.pop());
			this.render();
		}
	}


	this.render = function () {

		updatePixels();
		background(255);
		index = this.drawState.lastIndexOf('clear') + 1;
		for (var i = index; i < this.drawState.length; i++) {
			this.drawState[i].render();
		}
		loadPixels();

	}




}

function drawHistory(type) {
	this.contents = [];
	this.type = type;
	this.add = function (arg) {
		obj = {
			args: arg
		}
		this.contents.push(obj)
	}
	this.render = function () {
		for (var i = 0; i < this.contents.length; i++) {
			// console.log(this.contents);
			if (this.type == "line") {
				line(this.contents[i].args[0], this.contents[i].args[1], this.contents[i].args[2], this.contents[i].args[3]);
			}
			if (this.type == "point"){
				point(this.contents[i].args[0], this.contents[i].args[1]);
			}
		}
	}
}


function keyPressed() {

	if (keyCode == 85) {
		console.log("undo");
		actionManager.undo();
	}
	if (keyCode == 82) {
		actionManager.redo();
	}
}