function actionManager(){
	this.drawState = [];
	this.redoState = [];
    this.lock = false;
	this.switch = false;
	this.add = function (history){
		this.drawState.push(history)
	};
	this.undo = function(){
		console.log("aksjdfalksjdflkasjf");
		this.redoState.push(this.drawState.pop());
		
		this.render();
	}
	this.redo = function(){
		this.drawState.push(this.redoState.pop());
		this.render();
	}
	this.render = function(){
		background(255);
		for(var i = 0; i < this.drawState.length; i++){
			this.drawState[i].render();
		}
	}


	

}

function drawHistory(){
	this.contents = [];
	this.add = function(funcType, arg){
		obj = {func: funcType, args: arg}
		this.contents.push(obj)
	}
	this.render = function(){
		for(var i = 0; i < this.contents.length; i++){
			// console.log(this.contents);
			line(this.contents[i].args[0], this.contents[i].args[1],this.contents[i].args[2],this.contents[i].args[3]);
		}
	}
}


function keyPressed(){
	console.log(keyCode);
	if (keyCode == 85){
		console.log("undo");
		actionManager.undo();
	}
	if (keyCode == 82){
		actionManager.redo();
	}
}