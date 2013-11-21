// Jquery Document


$(window).load(function(){
	var h = window.innerHeight;
	$("#container").css("margin-top", h * 0.2 + "px");
})

$(window).resize(function(){
	var h = window.innerHeight;
	$("#container").css("margin-top", h * 0.2 + "px");
})

var txt = $("#target").text();
window.currentIndex = 0;
var answer = "impartiality";
$("#input").keyup(function(event){
	if(event.which === 13){
		var a = $(this).val();
		if( a === answer){
			$("#target").append(answer).hide().show("slow");
			$(this).css("display", "none");
		}else{
			if(window.currentIndex === 0){
				first = answer[0];
				var add = $("<span>" + first.toUpperCase() + "</span>").hide().show("slow")
				$("#target").append(add);
				$("input").css("width", 125 - (window.currentIndex + 1)*10 + "px");
				answer = answer.substring(1)
			}else if(window.currentIndex < 11){
				first = answer[0];
				var add = $("<span>" + first + "</span>").hide().show("slow")
				$("#target").append(add);
				$("input").css("width", 125 - (window.currentIndex + 1)*10 + "px");
				answer = answer.substring(1)
			}else{
				$("#target").append(answer).hide().show("slow");
				$(this).css("display", "none");
			}
			window.currentIndex++;
		}
	}
})
