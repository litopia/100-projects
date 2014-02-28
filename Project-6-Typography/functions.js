// JavaScript Document for the index page effects. 
window.onload = shapeWrapper();
window.onload = center();
window.onresize = newHeight();
window.onresize = shapeWrapper();
window.onresize = center();

//return the height of the size of the screen.
function newHeight(){
	var newHeight = 0;
	if( typeof( window.innerWidth ) == 'number' ) {
	  //Non-IE
	  newHeight = window.innerHeight;
	} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
	  //IE 6+ in 'standards compliant mode'
	  newHeight = document.documentElement.clientHeight;
	} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
	  //IE 4 compatible
	  newHeight = document.body.clientHeight;
	}
	return newHeight;	
}


function shapeWrapper(){
	var bgBoxes = document.getElementsByClassName("background-wrapper")
	var h = newHeight();
	if (h > 480){
		for (var i = 0; i < bgBoxes.length; i++){
		 i.style.height= h + "px";}
	}
}

function center(){
	//To readjust the text position of Day 1 to the center of the screen
	var h = newHeight();
	var dayOne = document.getElementById("day1");
	var textBoxOne = dayOne.getElementsByClassName("codyStar")[0];
	if(h > 480){
		textBoxOne.style.marginTop = ((h/2) - 152) + "px";
		document.getElementById("kingSta").style.marginTop
	}else{
		textBoxOne.style.marginTop = 138 + "px";}	
}


