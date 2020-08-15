function actionManager(){
    this.drawState = [];
    this.lock = false;
    

}













function keyPressed(){
	if (keyCode == 38){
		console.log("You are are")
		if (toolbox.selectedTool.hasOwnProperty("unlocked")) {
			console.log("You came here")
			toolbox.selectedTool.unlocked = true;
			toolbox.selectedTool.draw();
		}
	}
}