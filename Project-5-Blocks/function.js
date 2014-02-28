function Puzzle(tilesCount){
	  
// Jquery Document
	m_Tiles = tilesCount,
	m_AnswerBlocks = null;
	m_CurrentTry = 0;
	m_Score = 0;
	row = tilesCount -1;
	column = tilesCount;

	this.startGame = startGame;
	this.resetGame = resetGame;
	
	// Public Functions
	function startGame(gameFinishedCallback){
		createBoard();
		window.setTimeout(function(){
			showHideBlocks();
			attachClickHandlerToBlocks(gameFinishedCallback);
		}, 500);
	}
	
	function resetGame(tileCount, gameFinishedCallback){
		m_CurrentTry = 0;
		m_Tiles = tileCount;
		
		//Show a winner board to notify the user that he won and heading to next level.
		$("#playBoard tr.row").remove();
		$("#winner").addClass("display");
		
		//Start a new game
		window.setTimeout(function(){
			$("#winner").removeClass("display");
			startGame(gameFinishedCallback);
		}, 1000);
		
	}
	
	// Private Functions
	
	function createBoard(){
		for(var i = 0; i < row; i++){
			$("#playBoard").append("<tr class='row'>");
		}
		for(var i = 0; i < column; i++){
			$("#playBoard .row").append("<td class='cell'>");
		}
		
		$("#playBoard").addClass("display");
		updateScoreBoard();
		
		if(row < column){
			row++;	
		}else if(row == column){
			column++;
		}
	}
	
	function randomBlock(){
		var number = []; //to keep track of which block is taken to prevent duplicated blocks
		var show = []; // to keep track of the taken blocks
		//Create random blocks, takes in an array of td cells as parameter. 
		for(var i = 0; i<$(".cell").length; i++){
			number.push(i);
		}
		
		for(var j = 0; j<m_Tiles; j++){
			raNumber = Math.floor(Math.random()*number.length);
			var n = number.splice(raNumber, 1);
			show.push(n[0]);
		}
		console.log(show)
		return show;
	}
	
	//Changed blocks show and hide
	function showHideBlocks(){
		m_AnswerBlocks = randomBlock();
		
		//Show blocks to the users
		for(var k = 0; k<m_AnswerBlocks.length; k++ ){
			var n = m_AnswerBlocks[k];
			$(".cell").eq(n).addClass("change").addClass("answer");
		}
		
		//Hide blocks
		window.setTimeout(function(){
			for(var k = 0; k<m_AnswerBlocks.length; k++ ){
				var n = m_AnswerBlocks[k];
				$(".cell").eq(n).removeClass("change");
			}
		}, 500);
	}
	
	//Show the missed blocks
	function showMissedBlocks(){
		//Show blocks to the users
		for(var k = 0; k<m_AnswerBlocks.length; k++ ){
			var n = m_AnswerBlocks[k];
			$(".cell").eq(n).css({"background-color": "#FF9800"}, 500);
		}
	}
	
	function attachClickHandlerToBlocks(gameFinishedCallback){
		var isSuccess = true;
		
		//Hook up a click handler to each block
		$(".cell").click(function(e){
			//Check whether the user select the right block, if it is right, the block change to green, if not, changes to red
			if(m_CurrentTry < m_Tiles && !($(this).hasClass("check"))){
				if($(this).hasClass("answer")){
					$(this).css("background-color", "#FF9800").addClass("check");
					var i = $(this).index(".cell");
					var index = m_AnswerBlocks.indexOf(i);
					m_Score+= 100;
					$("#scoreBoard #score").html(m_Score);
					m_AnswerBlocks.splice(index, 1);
				}else{
					$(this).css("background-color", "#000").addClass("check");
					isSuccess = false;
				}
				m_CurrentTry++;
			}
			
			if(m_CurrentTry == m_Tiles){
				if(isSuccess){
					m_Score= m_Score + (m_Tiles * 100);	
				}else{
					showMissedBlocks();	
				}
				window.setTimeout(function(){
					$("#playBoard").removeClass("display");
					gameFinishedCallback(isSuccess);
				}, 1000);
			}
		});
	}
	
	//Update the score on score board
	function updateScoreBoard(){
		$("#scoreBoard #tiles").html(m_Tiles);
		$("#scoreBoard #score").html(m_Score);
	}
	
}




var tiles = 4;
var puzzle = new Puzzle(tiles);

$("button").click(function(){
	$("#starter").css("display", "none");
	puzzle.startGame(onGameOver);
});

function onGameOver(isSuccess){
	
	
	// Start Another Game
	if(isSuccess){
		tiles = tiles+1;
		puzzle.resetGame(tiles, onGameOver);
	}else{
		tiles = 4;
		$("#starter p").html("Game Over!");
		$("#starter button").css("visibility", "visible").html("Try Again");
		$("#starter").css("display", "block");
		$("#playBoard tr.row").remove();
		puzzle = new Puzzle(tiles);
	}
}








