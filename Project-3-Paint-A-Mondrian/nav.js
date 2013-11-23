// Jquery Document

//For iframe teaser
$("#nav").mouseenter(function(){
	$("#teaser").animate({width: "250px"}, 800);
	$("html").animate({right: "250px"}, 800);
});
$('#teaser').mouseleave(function(){
	$("#teaser").animate({width: "1px"}, 800);
	$("html").animate({right: "0"}, 800);
})






