// Jquery Document

	//To center the text on the center of the screen
	$(window).load(function(){
		var h = window.innerHeight;
		$("#container").css("margin-top", h * 0.2 + "px");
	})
	
	$(window).resize(function(){
		var h = window.innerHeight;
		$("#container").css("margin-top", h * 0.2 + "px");
	})
	
	
	var answer = ["dwell","dream", "concentrate"];
	$(".input").keyup(function(event){
		if(event.which === 13){
			var input = $(this).val();
			var current = event.currentTarget.id;
			var number = parseInt(current[5]);
			checkAnswer(input, current, number);
		}
	})
	
	//check whether the answer is correct
	function checkAnswer(input, current, number){
		//windown.currentIndex = 0;
		var add;
		var a = answer[number - 1];
		if( input === a){
			$(".target" + "."+current).append(a).hide().show("slow");
			$("#" + current).css("display", "none");
		}else{
			first = a[0];
			if(a.length > 1){
				//first = a[0];
				add = $("<span>" + first.toUpperCase() + "</span>").hide().show("slow")
				$(".target" + "." + current).append(add);
				$("#" + current).css("width", a.length*10 + "px");
				$("#" + current).val('');
				a = a.substring(1);
				answer[number-1] = a;
			}else if(a.length===1){
				//first = a[0];
				add = $("<span>" + first.toUpperCase() + "</span>").hide().show("slow")
				$(".target" + "." + current).append(add);
				$("#" + current).css("display", "none");
			}
		}	
	}

//generate random background color
$("#random-color").click(function(){
	var hue = 'rgb(' + (Math.floor(Math.random()*200)) + ',' + (Math.floor(Math.random()*200)) + ',' + (Math.floor(Math.random()*200)) + ')' ;
	$("body").animate({backgroundColor: hue}, 500);
	$(".input").animate({backgroundColor: hue}, 500);
})








