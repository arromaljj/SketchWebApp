function SprayCanTool(){
	
	this.name = "sprayCanTool";
	this.icon = "assets/sprayCan.jpg";

	var added = false;
	var spread = 10;
	var points = 13
	var pointSlider;
	var spreadSlider;
	var spreadDiv ;
	var pointDiv ;

	this.addToolOptions = function(){
		if (added == false){

			pointSlider = createSlider(1,500,points)
			// pointSlider.style('orient: vertical')
			spreadSlider = createSlider(1, 50, spread);
			// spreadSlider.style('orient: vertical')
			
			spread = spreadSlider.value();
			points = pointSlider.value()
			this.update();
			added = true;
		}
	}

	this.update = function(){
		if (spreadDiv != null){
			spreadDiv.remove();
			console.log("removed")
		}
		if (pointDiv != null){
			pointDiv.remove();
			console.log("removed")
		}
		spreadDiv = createDiv("<h4>Spread : " + spread +  "<\h4>" );
		pointDiv = createDiv("<h4>Points : " + points + "<\h4>" );
		spreadDiv.child(spreadSlider);
		pointDiv.child(pointSlider);
		pointDiv.addClass("toolElement");
		spreadDiv.addClass("toolElement");
		var c = select("#toolOptions")
		pointDiv.parent(c);
		spreadDiv.parent(c);
	}

	

	this.removeToolOptions = function(){
		if (added == true){
			var c = selectAll(".toolElement");
			for (var i = 0; i < c.length; i++){
				c[i].remove();
			}
		}
		added = false;
	}
	
	this.changeSpread = function(num){
		spread += num
		if (spread < 1){
			spread = 1
		}
		else if (spread > 50){ 	
			spread = 50
		}
	};

	this.draw = function(){
		
		oldSpread = spread;
		oldPoints = points;
		spread = spreadSlider.value();
		points = pointSlider.value();
		if (oldSpread != spread | oldPoints != points){
			this.update();
		}
		var r = random(5,10);
		if(mouseIsPressed){
			for(var i = 0; i < points; i++){
				point(random(mouseX-spread, mouseX + spread), random(mouseY-spread, mouseY+spread));
			}
		}
		
	};

	this.addOptions = function(){
		
	}
	
}