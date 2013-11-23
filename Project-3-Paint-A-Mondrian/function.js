// Jquery Document

var color ="";
window.currentIndex = 0;

$(".color").click(function(event){
	color = $("#" + event.currentTarget.id).css("background-color");
	if(window.currentIndex >0){
		$("p#alertMsg").hide("fast");
	}
})


$(".area").click(function(){
	if(color !== ""){
		$(this).css("background-color", color);
	}else if(window.currentIndex === 0){
		$("<p id='alertMsg'>&#8592 Hey, you forgot to pick a color first.</p>").appendTo("#color-container").hide().show("slow");
		window.currentIndex ++;
	}
})






