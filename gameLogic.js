/*
Nathan Solosko 
01-14-2022
Vanilla Javascript Chess Game
*/

/* Declare and set values for the chess pieces. Due to pawn promotion, a maximum of 8-10 of the various pieces could potentially
exist on the board at any given time. Excess pieces are hidden from view until needed.*/

var blackBishop1 = document.createElement("img")
blackBishop1.src = "/chess pieces/blackBishop.png"
blackBishop1.setAttribute("id","blackBishop1");
var blackBishop2 = document.createElement("img")
blackBishop2.src = "/chess pieces/blackBishop.png"
blackBishop2.setAttribute("id","blackBishop2");
var blackBishop3 = document.createElement("img")
blackBishop3.src = "/chess pieces/blackBishop.png"
blackBishop3.setAttribute("id","blackBishop3");
var blackBishop4 = document.createElement("img")
blackBishop4.src = "/chess pieces/blackBishop.png"
blackBishop4.setAttribute("id","blackBishop4");
var blackBishop5 = document.createElement("img")
blackBishop5.src = "/chess pieces/blackBishop.png"
blackBishop5.setAttribute("id","blackBishop5");
var blackBishop6 = document.createElement("img")
blackBishop6.src = "/chess pieces/blackBishop.png"
blackBishop6.setAttribute("id","blackBishop6");
var blackBishop7 = document.createElement("img")
blackBishop7.src = "/chess pieces/blackBishop.png"
blackBishop7.setAttribute("id","blackBishop7");
var blackBishop8 = document.createElement("img")
blackBishop8.src = "/chess pieces/blackBishop.png"
blackBishop8.setAttribute("id","blackBishop8");
var blackBishop9 = document.createElement("img")
blackBishop9.src = "/chess pieces/blackBishop.png"
blackBishop9.setAttribute("id","blackBishop9");
var blackBishop10 = document.createElement("img")
blackBishop10.src = "/chess pieces/blackBishop.png"
blackBishop10.setAttribute("id","blackBishop10");
var blackBishop11 = document.createElement("img")
blackBishop11.src = "/chess pieces/blackBishop.png"
blackBishop11.setAttribute("id","blackBishop11");
var blackRook1 = document.createElement("img")
blackRook1.src = "/chess pieces/blackRook.png"
blackRook1.setAttribute("id","blackRook1");
var blackRook2 = document.createElement("img")
blackRook2.src = "/chess pieces/blackRook.png"
blackRook2.setAttribute("id","blackRook2");
var blackRook3 = document.createElement("img")
blackRook3.src = "/chess pieces/blackRook.png"
blackRook3.setAttribute("id","blackRook3");
var blackRook4 = document.createElement("img")
blackRook4.src = "/chess pieces/blackRook.png"
blackRook4.setAttribute("id","blackRook4");
var blackRook5 = document.createElement("img")
blackRook5.src = "/chess pieces/blackRook.png"
blackRook5.setAttribute("id","blackRook5");
var blackRook6 = document.createElement("img")
blackRook6.src = "/chess pieces/blackRook.png"
blackRook6.setAttribute("id","blackRook6");
var blackRook7 = document.createElement("img")
blackRook7.src = "/chess pieces/blackRook.png"
blackRook7.setAttribute("id","blackRook7");
var blackRook8 = document.createElement("img")
blackRook8.src = "/chess pieces/blackRook.png"
blackRook8.setAttribute("id","blackRook8");
var blackRook9 = document.createElement("img")
blackRook9.src = "/chess pieces/blackRook.png"
blackRook9.setAttribute("id","blackRook9");
var blackRook10 = document.createElement("img")
blackRook10.src = "/chess pieces/blackRook.png"
blackRook10.setAttribute("id","blackRook10");
var blackRook11 = document.createElement("img")
blackRook11.src = "/chess pieces/blackRook.png"
blackRook11.setAttribute("id","blackRook11");
var blackKnight1 = document.createElement("img")
blackKnight1.src = "/chess pieces/blackKnight.png"
blackKnight1.setAttribute("id","blackKnight1");
var blackKnight2 = document.createElement("img")
blackKnight2.src = "/chess pieces/blackKnight.png"
blackKnight2.setAttribute("id","blackKnight2");
var blackKnight3 = document.createElement("img")
blackKnight3.src = "/chess pieces/blackKnight.png"
blackKnight3.setAttribute("id","blackKnight3");
var blackKnight4 = document.createElement("img")
blackKnight4.src = "/chess pieces/blackKnight.png"
blackKnight4.setAttribute("id","blackKnight4");
var blackKnight5 = document.createElement("img")
blackKnight5.src = "/chess pieces/blackKnight.png"
blackKnight5.setAttribute("id","blackKnight5");
var blackKnight6 = document.createElement("img")
blackKnight6.src = "/chess pieces/blackKnight.png"
blackKnight6.setAttribute("id","blackKnight6");
var blackKnight7 = document.createElement("img")
blackKnight7.src = "/chess pieces/blackKnight.png"
blackKnight7.setAttribute("id","blackKnight7");
var blackKnight8 = document.createElement("img")
blackKnight8.src = "/chess pieces/blackKnight.png"
blackKnight8.setAttribute("id","blackKnight8");
var blackKnight9 = document.createElement("img")
blackKnight9.src = "/chess pieces/blackKnight.png"
blackKnight9.setAttribute("id","blackKnight9");
var blackKnight10 = document.createElement("img")
blackKnight10.src = "/chess pieces/blackKnight.png"
blackKnight10.setAttribute("id","blackKnight10");
var blackKnight11 = document.createElement("img")
blackKnight11.src = "/chess pieces/blackKnight.png"
blackKnight11.setAttribute("id","blackKnight11");
var blackPawn1 = document.createElement("img");
blackPawn1.src = "/chess pieces/blackPawn.png"
blackPawn1.setAttribute("id","blackPawn1");
var blackPawn2 = document.createElement("img")
blackPawn2.src = "/chess pieces/blackPawn.png"
blackPawn2.setAttribute("id","blackPawn2");
var blackPawn3 = document.createElement("img")
blackPawn3.src = "/chess pieces/blackPawn.png"
blackPawn3.setAttribute("id","blackPawn3");
var blackPawn4 = document.createElement("img")
blackPawn4.src = "/chess pieces/blackPawn.png"
blackPawn4.setAttribute("id","blackPawn4");
var blackPawn5 = document.createElement("img")
blackPawn5.src = "/chess pieces/blackPawn.png"
blackPawn5.setAttribute("id","blackPawn5");
var blackPawn6 = document.createElement("img")
blackPawn6.src = "/chess pieces/blackPawn.png"
blackPawn6.setAttribute("id","blackPawn6");
var blackPawn7 = document.createElement("img")
blackPawn7.src = "/chess pieces/blackPawn.png"
blackPawn7.setAttribute("id","blackPawn7");
var blackPawn8 = document.createElement("img")
blackPawn8.src = "/chess pieces/blackPawn.png"
blackPawn8.setAttribute("id","blackPawn8");
var blackKing = document.createElement("img")
blackKing.src = "/chess pieces/blackKing.png"
blackKing.setAttribute("id","blackKing");
var blackQueen = document.createElement("img")
blackQueen.src = "/chess pieces/blackQueen.png"
blackQueen.setAttribute("id","blackQueen");
var blackQueen2 = document.createElement("img")
blackQueen2.src = "/chess pieces/blackQueen.png"
blackQueen2.setAttribute("id","blackQueen2");
var blackQueen3 = document.createElement("img")
blackQueen3.src = "/chess pieces/blackQueen.png"
blackQueen3.setAttribute("id","blackQueen3");
var blackQueen4 = document.createElement("img")
blackQueen4.src = "/chess pieces/blackQueen.png"
blackQueen4.setAttribute("id","blackQueen4");
var blackQueen5 = document.createElement("img")
blackQueen5.src = "/chess pieces/blackQueen.png"
blackQueen.setAttribute("id","blackQueen5");
var blackQueen6 = document.createElement("img")
blackQueen6.src = "/chess pieces/blackQueen.png"
blackQueen6.setAttribute("id","blackQueen6");
var blackQueen7 = document.createElement("img")
blackQueen7.src = "/chess pieces/blackQueen.png"
blackQueen7.setAttribute("id","blackQueen7");
var blackQueen8 = document.createElement("img")
blackQueen8.src = "/chess pieces/blackQueen.png"
blackQueen8.setAttribute("id","blackQueen8");
var blackQueen9 = document.createElement("img")
blackQueen9.src = "/chess pieces/blackQueen.png"
blackQueen9.setAttribute("id","blackQueen9");
var blackQueen10 = document.createElement("img")
blackQueen10.src = "/chess pieces/blackQueen.png"
blackQueen10.setAttribute("id","blackQueen10");

var whiteBishop1 = document.createElement("img")
whiteBishop1.src = "/chess pieces/whiteBishop.png"
whiteBishop1.setAttribute("id","whiteBishop1");
var whiteBishop2 = document.createElement("img")
whiteBishop2.src = "/chess pieces/whiteBishop.png"
whiteBishop2.setAttribute("id","whiteBishop2");
var whiteBishop3 = document.createElement("img")
whiteBishop3.src = "/chess pieces/whiteBishop.png"
whiteBishop3.setAttribute("id","whiteBishop3");
var whiteBishop4 = document.createElement("img")
whiteBishop4.src = "/chess pieces/whiteBishop.png"
whiteBishop4.setAttribute("id","whiteBishop4");
var whiteBishop5 = document.createElement("img")
whiteBishop5.src = "/chess pieces/whiteBishop.png"
whiteBishop5.setAttribute("id","whiteBishop5");
var whiteBishop6 = document.createElement("img")
whiteBishop6.src = "/chess pieces/whiteBishop.png"
whiteBishop6.setAttribute("id","whiteBishop6");
var whiteBishop7 = document.createElement("img")
whiteBishop7.src = "/chess pieces/whiteBishop.png"
whiteBishop7.setAttribute("id","whiteBishop7");
var whiteBishop8 = document.createElement("img")
whiteBishop8.src = "/chess pieces/whiteBishop.png"
whiteBishop8.setAttribute("id","whiteBishop8");
var whiteBishop9 = document.createElement("img")
whiteBishop9.src = "/chess pieces/whiteBishop.png"
whiteBishop9.setAttribute("id","whiteBishop9");
var whiteBishop10 = document.createElement("img")
whiteBishop10.src = "/chess pieces/whiteBishop.png"
whiteBishop10.setAttribute("id","whiteBishop10");
var whiteBishop11 = document.createElement("img")
whiteBishop11.src = "/chess pieces/whiteBishop.png"
whiteBishop11.setAttribute("id","whiteBishop11");
var whiteRook1 = document.createElement("img")
whiteRook1.src = "/chess pieces/whiteRook.png"
whiteRook1.setAttribute("id","whiteRook1");
var whiteRook2 = document.createElement("img")
whiteRook2.src = "/chess pieces/whiteRook.png"
whiteRook2.setAttribute("id","whiteRook2");
var whiteRook3 = document.createElement("img")
whiteRook3.src = "/chess pieces/whiteRook.png"
whiteRook3.setAttribute("id","whiteRook3");
var whiteRook4 = document.createElement("img")
whiteRook4.src = "/chess pieces/whiteRook.png"
whiteRook4.setAttribute("id","whiteRook4");
var whiteRook5 = document.createElement("img")
whiteRook5.src = "/chess pieces/whiteRook.png"
whiteRook5.setAttribute("id","whiteRook5");
var whiteRook6 = document.createElement("img")
whiteRook6.src = "/chess pieces/whiteRook.png"
whiteRook6.setAttribute("id","whiteRook6");
var whiteRook7 = document.createElement("img")
whiteRook7.src = "/chess pieces/whiteRook.png"
whiteRook7.setAttribute("id","whiteRook7");
var whiteRook8 = document.createElement("img")
whiteRook8.src = "/chess pieces/whiteRook.png"
whiteRook8.setAttribute("id","whiteRook8");
var whiteRook9 = document.createElement("img")
whiteRook9.src = "/chess pieces/whiteRook.png"
whiteRook9.setAttribute("id","whiteRook9");
var whiteRook10 = document.createElement("img")
whiteRook10.src = "/chess pieces/whiteRook.png"
whiteRook10.setAttribute("id","whiteRook10");
var whiteRook11 = document.createElement("img")
whiteRook11.src = "/chess pieces/whiteRook.png"
whiteRook11.setAttribute("id","whiteRook11");
var whiteKnight1 = document.createElement("img")
whiteKnight1.src = "/chess pieces/whiteKnight.png"
whiteKnight1.setAttribute("id","whiteKnight1");
var whiteKnight2 = document.createElement("img")
whiteKnight2.src = "/chess pieces/whiteKnight.png"
whiteKnight2.setAttribute("id","whiteKnight2");
var whiteKnight3 = document.createElement("img")
whiteKnight3.src = "/chess pieces/whiteKnight.png"
whiteKnight3.setAttribute("id","whiteKnight3");
var whiteKnight4 = document.createElement("img")
whiteKnight4.src = "/chess pieces/whiteKnight.png"
whiteKnight4.setAttribute("id","whiteKnight4");
var whiteKnight5 = document.createElement("img")
whiteKnight5.src = "/chess pieces/whiteKnight.png"
whiteKnight5.setAttribute("id","whiteKnight5");
var whiteKnight6 = document.createElement("img")
whiteKnight6.src = "/chess pieces/whiteKnight.png"
whiteKnight6.setAttribute("id","whiteKnight6");
var whiteKnight7 = document.createElement("img")
whiteKnight7.src = "/chess pieces/whiteKnight.png"
whiteKnight7.setAttribute("id","whiteKnight7");
var whiteKnight8 = document.createElement("img")
whiteKnight8.src = "/chess pieces/whiteKnight.png"
whiteKnight8.setAttribute("id","whiteKnight8");
var whiteKnight9 = document.createElement("img")
whiteKnight9.src = "/chess pieces/whiteKnight.png"
whiteKnight9.setAttribute("id","whiteKnight9");
var whiteKnight10 = document.createElement("img")
whiteKnight10.src = "/chess pieces/whiteKnight.png"
whiteKnight10.setAttribute("id","whiteKnight10");
var whiteKnight11 = document.createElement("img")
whiteKnight11.src = "/chess pieces/whiteKnight.png"
whiteKnight11.setAttribute("id","whiteKnight11");
var whitePawn1 = document.createElement("img")
whitePawn1.src = "/chess pieces/whitePawn.png"
whitePawn1.setAttribute("id","whitePawn1");
var whitePawn2 = document.createElement("img")
whitePawn2.src = "/chess pieces/whitePawn.png"
whitePawn2.setAttribute("id","whitePawn2");
var whitePawn3 = document.createElement("img")
whitePawn3.src = "/chess pieces/whitePawn.png"
whitePawn3.setAttribute("id","whitePawn3");
var whitePawn4 = document.createElement("img")
whitePawn4.src = "/chess pieces/whitePawn.png"
whitePawn4.setAttribute("id","whitePawn4");
var whitePawn5 = document.createElement("img")
whitePawn5.src = "/chess pieces/whitePawn.png"
whitePawn5.setAttribute("id","whitePawn5");
var whitePawn6 = document.createElement("img")
whitePawn6.src = "/chess pieces/whitePawn.png"
whitePawn6.setAttribute("id","whitePawn6");
var whitePawn7 = document.createElement("img")
whitePawn7.src = "/chess pieces/whitePawn.png"
whitePawn7.setAttribute("id","whitePawn7");
var whitePawn8 = document.createElement("img")
whitePawn8.src = "/chess pieces/whitePawn.png"
whitePawn8.setAttribute("id","whitePawn8");
var whiteKing = document.createElement("img")
whiteKing.src = "/chess pieces/whiteKing.png"
whiteKing.setAttribute("id","whiteKing");
var whiteQueen = document.createElement("img")
whiteQueen.src = "/chess pieces/whiteQueen.png"
whiteQueen.setAttribute("id","whiteQueen");
var whiteQueen2 = document.createElement("img")
whiteQueen2.src = "/chess pieces/whiteQueen.png"
whiteQueen2.setAttribute("id","whiteQueen2");
var whiteQueen3 = document.createElement("img")
whiteQueen3.src = "/chess pieces/whiteQueen.png"
whiteQueen3.setAttribute("id","whiteQueen3");
var whiteQueen4 = document.createElement("img")
whiteQueen4.src = "/chess pieces/whiteQueen.png"
whiteQueen4.setAttribute("id","whiteQueen4");
var whiteQueen5 = document.createElement("img")
whiteQueen5.src = "/chess pieces/whiteQueen.png"
whiteQueen5.setAttribute("id","whiteQueen5");
var whiteQueen6 = document.createElement("img")
whiteQueen6.src = "/chess pieces/whiteQueen.png"
whiteQueen6.setAttribute("id","whiteQueen6");
var whiteQueen7 = document.createElement("img")
whiteQueen7.src = "/chess pieces/whiteQueen.png"
whiteQueen7.setAttribute("id","whiteQueen7");
var whiteQueen8 = document.createElement("img")
whiteQueen8.src = "/chess pieces/whiteQueen.png"
whiteQueen8.setAttribute("id","whiteQueen8");
var whiteQueen9 = document.createElement("img")
whiteQueen9.src = "/chess pieces/whiteQueen.png"
whiteQueen9.setAttribute("id","whiteQueen9");
var whiteQueen10 = document.createElement("img")
whiteQueen10.src = "/chess pieces/whiteQueen.png"
whiteQueen10.setAttribute("id","whiteQueen10");

/* The piece array keeps track of every piece that exists, or could exist, on the board. The array is used to determine which 
tile is selected if a user clicks on a piece on the board. The pieces are all created as image elements contained within tiles,
which themselves are created through html tables. The game logic is setup so that tiles and piece type determine potential actions,
so knowing which tile is clicked on is crucial. 
*/
const pieceArray = new Array(blackBishop1, blackBishop2, blackBishop3, blackBishop4, blackBishop5, blackBishop6, 
	blackBishop7, blackBishop8, blackBishop9, blackBishop10, blackKnight1, blackKnight2, blackKnight3, blackKnight4, 
	blackKnight5, blackKnight6, blackKnight7, blackKnight8, blackKnight9, blackKnight10, blackKing, blackQueen,
	blackQueen2, blackQueen3, blackQueen4, blackQueen5, blackQueen6, blackQueen7, blackQueen8, blackQueen9, blackRook1, blackRook2,
	blackRook3, blackRook4, blackRook5, blackRook6, blackRook7, blackRook8, blackRook9, blackRook10,
	blackPawn1, blackPawn2, blackPawn3, blackPawn4, blackPawn5, blackPawn6, blackPawn7, blackPawn8, 
	whiteBishop1, whiteBishop2, whiteBishop3, whiteBishop4, whiteBishop5, whiteBishop6, whiteBishop7, whiteBishop8, whiteBishop9, whiteBishop10,
	whiteKnight1, whiteKnight2, whiteKnight3, whiteKnight4, whiteKnight5, whiteKnight6, whiteKnight7, whiteKnight8, whiteKnight9, whiteKnight10,
	whiteKing, whiteQueen, whiteQueen2, whiteQueen3, whiteQueen4, whiteQueen5, whiteQueen6, whiteQueen7, whiteQueen8, whiteQueen9, 
	whiteRook1, whiteRook2, whiteRook3, whiteRook4, whiteRook5, whiteRook6, whiteRook7, whiteRook8, whiteRook9, whiteRook10,
	whitePawn1, whitePawn2, whitePawn3, whitePawn4, whitePawn5, whitePawn6, whitePawn7, whitePawn8);

/* The board tile array keeps track of all tiles that exist on the chessboard. This is useful for various functions, such as 
determining a pieces potential moves and coloring the tiles related to those moves blue. */	
const boardTileArray = new Array("a8", "a7", "a6", "a5", "a4", "a3", "a2", "a1", "b8", "b7", "b6", "b5", "b4", "b3", "b2", "b1", 
	"c8", "c7", "c6", "c5", "c4", "c3", "c2", "c1", "d8", "d7", "d6", "d5", "d4", "d3", "d2", "d1", "e8", "e7", "e6", "e5", "e4", "e3", "e2", "e1",
	"f8", "f7", "f6", "f5", "f4", "f3", "f2", "f1", "g8","g7", "g6", "g5", "g4", "g3", "g2", "g1", "h8","h7", "h6", "h5", "h4", "h3", "h2", "h1");

/* The board color array keeps track of the original color pattern on the board. Since the game logic colors tiles 
blue when a piece is able to move to them, resetting them back to their original color is required. */
const boardColorArray = new Array("w","o","w","o","w","o","w","o","o","w","o","w","o","w","o","w","w","o","w","o","w","o","w","o", "o","w","o","w","o","w","o","w", 
	"w","o","w","o","w","o","w","o","o","w","o","w","o","w","o","w","w","o","w","o","w","o","w","o","o","w","o","w","o","w","o","w");	

// keep track of which piece and tile was selected by the player.
let selectedTile = "";
let selectedPiece = "";
//Represents the numeric representation of the position in the board tile array.
let selectedTilePosition= "";
let playerTurn = "white";
/* Selection keeps track of whether or not a piece has been clicked on. 
Turn check ensures that a player can only select their own pieces. */   
let selection = false;
let turnCheck = false;
// The move array keeps track of all moves made during the game and allows for moves to be undone during the game.
let moveArray = new Array();
// The pawn promotion variable is a flag used to determine if the current situation in the game relates to pawn promotion. 
let pawnPromotion = false;
// Next three variables used along with the move array to keep track of information and allow for turns to be reset incrementally.
let promotedPawn = "";
let promotionTile = "";
let originalTile = "";
// Next six variables used for game logic related to castling.
let whiteKingMoved = false;
let whiteRook1Moved = false;
let whiteRook2Moved = false; 
let blackKingMoved = false;
let blackRook1Moved = false;
let blackRook2Moved = false; 
// Next eight arrays used for game logic related to pawn promotion.  
let blackRookPromotionArray = new Array(blackRook3, blackRook4, blackRook5, blackRook6, blackRook7, blackRook8, blackRook9, blackRook10);
let blackKnightPromotionArray= new Array(blackKnight3, blackKnight4, blackKnight5, blackKnight6, blackKnight7, blackKnight8, blackKnight9, blackKnight10);
let blackBishopPromotionArray = new Array(blackBishop3, blackBishop4, blackBishop5, blackBishop6, blackBishop7, blackBishop8, blackBishop9, blackBishop10);
let blackQueenPromotionArray = new Array(blackQueen2, blackQueen3, blackQueen4, blackQueen5, blackQueen6, blackQueen7, blackQueen8, blackQueen9);
let whiteRookPromotionArray = new Array(whiteRook3, whiteRook4, whiteRook5, whiteRook6, whiteRook7, whiteRook8, whiteRook9, whiteRook10);
let whiteKnightPromotionArray= new Array(whiteKnight3, whiteKnight4, whiteKnight5, whiteKnight6, whiteKnight7, whiteKnight8, whiteKnight9, whiteKnight10);
let whiteBishopPromotionArray = new Array(whiteBishop3, whiteBishop4, whiteBishop5, whiteBishop6, whiteBishop7, whiteBishop8, whiteBishop9, whiteBishop10);
let whiteQueenPromotionArray = new Array(whiteQueen2, whiteQueen3, whiteQueen4, whiteQueen5, whiteQueen6, whiteQueen7, whiteQueen8, whiteQueen9);
// The initialze game function places the chess pieces on their proper starting locations and places the images for pawn promotion. 
function initializeGame(){
	document.getElementById("a8").appendChild(blackRook1);
	document.getElementById("b8").appendChild(blackKnight1);
	document.getElementById("c8").appendChild(blackBishop1);
	document.getElementById("d8").appendChild(blackQueen);
	document.getElementById("e8").appendChild(blackKing);
	document.getElementById("f8").appendChild(blackBishop2);
	document.getElementById("g8").appendChild(blackKnight2);
	document.getElementById("h8").appendChild(blackRook2);
	document.getElementById("a7").appendChild(blackPawn1);
	document.getElementById("b7").appendChild(blackPawn2);
	document.getElementById("c7").appendChild(blackPawn3);
	document.getElementById("d7").appendChild(blackPawn4);
	document.getElementById("e7").appendChild(blackPawn5);
	document.getElementById("f7").appendChild(blackPawn6);
	document.getElementById("g7").appendChild(blackPawn7);
	document.getElementById("h7").appendChild(blackPawn8);
	document.getElementById("a1").appendChild(whiteRook1);
	document.getElementById("b1").appendChild(whiteKnight1);
	document.getElementById("c1").appendChild(whiteBishop1);
	document.getElementById("d1").appendChild(whiteQueen);
	document.getElementById("e1").appendChild(whiteKing);
	document.getElementById("f1").appendChild(whiteBishop2);
	document.getElementById("g1").appendChild(whiteKnight2);
	document.getElementById("h1").appendChild(whiteRook2);
	document.getElementById("a2").appendChild(whitePawn1);
	document.getElementById("b2").appendChild(whitePawn2);
	document.getElementById("c2").appendChild(whitePawn3);
	document.getElementById("d2").appendChild(whitePawn4);
	document.getElementById("e2").appendChild(whitePawn5);
	document.getElementById("f2").appendChild(whitePawn6);
	document.getElementById("g2").appendChild(whitePawn7);
	document.getElementById("h2").appendChild(whitePawn8);
	document.getElementById("promoteBlackRook").appendChild(blackRook11);
	document.getElementById("promoteBlackKnight").appendChild(blackKnight11);
	document.getElementById("promoteBlackBishop").appendChild(blackBishop11);
	document.getElementById("promoteBlackQueen").appendChild(blackQueen10);
	document.getElementById("promoteWhiteRook").appendChild(whiteRook11);
	document.getElementById("promoteWhiteKnight").appendChild(whiteKnight11);
	document.getElementById("promoteWhiteBishop").appendChild(whiteBishop11);
	document.getElementById("promoteWhiteQueen").appendChild(whiteQueen10);

}
initializeGame();

/* A single event listener is used for the game. Depending on the flag variables and their values, different paths are taken
and different branches of logic are run.
*/
document.addEventListener("click",function(event){
	if(pawnPromotion == false){	
		/* The selection branch runs only if an appropriate piece for the players turn is already selected and allows 
		for the selected piece to move to tiles which have been colored blue. Which tiles are colored blue are determined
	    through game logic elsewhere in the program. */
		if (selection == true && event.target.id != "chessboard" && event.target.id != "undo_last_move"){
			if(document.getElementById(event.target.id).style.backgroundColor == "blue" || 
			document.getElementById(event.target.parentElement.id).style.backgroundColor == "blue"){
				if (document.getElementById(event.target.id).hasChildNodes() != true && pieceArray.includes(event.target) != true){
					document.getElementById(event.target.id).appendChild(document.getElementById(selectedTile.id).firstChild);
					if(getSelectedPiece(document.getElementById(event.target.id).firstChild.id) == "blackPawn"){
						if(event.target.id == "a1" || event.target.id == "b1" || event.target.id == "c1" || event.target.id == "d1" ||
						event.target.id == "e1" || event.target.id == "f1" || event.target.id == "g1" || event.target.id == "h1"){
							promotionTile = event.target.id;
							promotedPawn = document.getElementById(event.target.id).firstChild.id;
							document.getElementById("promoteBlack").style.display = "table";
							pawnPromotion = true;
						}
					}
					else if (getSelectedPiece(document.getElementById(event.target.id).firstChild.id) == "whitePawn"){
						if(event.target.id == "a8" || event.target.id == "b8" || event.target.id == "c8" || event.target.id == "d8" ||
						event.target.id == "e8" || event.target.id == "f8" || event.target.id == "g8" || event.target.id == "h8"){
							promotionTile = event.target.id;
							promotedPawn = document.getElementById(event.target.id).firstChild.id;
							document.getElementById("promoteWhite").style.display = "table";
							pawnPromotion = true;
						}
					}
					if (playerTurn == "white"){
						playerTurn = "black";
					}
					else{
						playerTurn = "white";
					}
					/* If the tile a piece is moved to is empty, add the original tile a piece was in, the id of that piece, 
					the new tile the piece was placed in and a placeholder to the completed moves array. Additionally, if
					the selected piece is a king, check to determine if the player is castling and if so,
					follow castling logic/rules. */	
					if(selectedPiece == "blackKing" || selectedPiece == "whiteKing"){
						if(selectedPiece == "blackKing"){
							if(document.getElementById("c8").style.backgroundColor == "blue" && event.target.id == "c8"){
								document.getElementById("d8").appendChild(blackRook1);
								document.getElementById("c8").appendChild(blackKing);
								blackRook1Moved = true;
								blackKingMoved = true;
								moveArray.push(selectedTile.id);
								moveArray.push("blackKing");
								moveArray.push("a8");
								moveArray.push("blackRook1");
								moveArray.push("none");
							}
							else if (document.getElementById("g8").style.backgroundColor == "blue" && event.target.id == "g8"){
								document.getElementById("f8").appendChild(blackRook2);
								document.getElementById("g8").appendChild(blackKing);
								blackRook2Moved = true;
								blackKingMoved = true;
								moveArray.push(selectedTile.id);
								moveArray.push("blackKing");
								moveArray.push("h8");
								moveArray.push("blackRook2");
								moveArray.push("none");
							}
						}
						else{
							if(document.getElementById("c1").style.backgroundColor == "blue" && event.target.id == "c1"){
								document.getElementById("d1").appendChild(whiteRook1);
								document.getElementById("c1").appendChild(whiteKing);
								whiteRook1Moved = true;
								whiteKingMoved = true;
								moveArray.push(selectedTile.id);
								moveArray.push("whiteKing");
								moveArray.push("a1");
								moveArray.push("whiteRook1");
								moveArray.push("none");
							}
							else if (document.getElementById("g1").style.backgroundColor == "blue" && event.target.id == "g1"){
								document.getElementById("f1").appendChild(whiteRook2);
								document.getElementById("g1").appendChild(whiteKing);
								whiteRook2Moved = true;
								whiteKingMoved = true;
								moveArray.push(selectedTile.id);
								moveArray.push("whiteKing");
								moveArray.push("h1");
								moveArray.push("whiteRook2");
								moveArray.push("none");
							}
						}
					}
					else if (pawnPromotion != true){
						moveArray.push(selectedTile.id);
						moveArray.push(document.getElementById(event.target.id).firstChild.id);
						moveArray.push(event.target.id);
						moveArray.push("none");
						moveArray.push("none");
						// If the king or rooks move, castling is no longer possible.
						if (document.getElementById(event.target.id).firstChild.id == "blackRook1"){
							blackRook1Moved = true;
						}
						else if (document.getElementById(event.target.id).firstChild.id == "blackRook2"){
							blackRook2Moved = true;
						}
						else if(document.getElementById(event.target.id).firstChild.id == "blackKing"){
							blackKingMoved = true;
						}
						else if (document.getElementById(event.target.id).firstChild.id == "whiteRook1"){
							whiteRook1Moved = true;
						}
						else if (document.getElementById(event.target.id).firstChild.id == "whiteRook2"){
							whiteRook2Moved = true;
						}
						else if (document.getElementById(event.target.id).firstChild.id == "whiteKing"){
							whiteKingMoved = true;
						}
					}
					else{
						moveArray.push(selectedTile.id);
						moveArray.push(document.getElementById(event.target.id).firstChild.id);
						moveArray.push(event.target.id);
						moveArray.push("none");
						moveArray.push(promotedPawn);
					}
				}

				else if (pieceArray.includes(event.target)){
					/* If the player clicks on the opposing colors piece to capture, add the original tile the piece was in, the id of the piece doing the capturing, 
					the new tile the piece was placed in and the specific piece that was captured to the completed moves array. */	
					moveArray.push(selectedTile.id);
					moveArray.push(document.getElementById(selectedTile.id).firstChild.id);
					moveArray.push(event.target.parentElement.id);
					moveArray.push(event.target.id);
					selectedPiece = selectedTile.firstChild.id;
					if (document.getElementById(selectedTile.id).firstChild.id == "blackRook1"){
						blackRook1Moved = true;
					}
					else if (document.getElementById(selectedTile.id).firstChild.id == "blackRook2"){
						blackRook2Moved = true;
					}
					else if(document.getElementById(selectedTile.id).firstChild.id == "blackKing"){
						blackKingMoved = true;
					}
					else if (document.getElementById(selectedTile.id).firstChild.id == "whiteRook1"){
						whiteRook1Moved = true;
					}
					else if (document.getElementById(selectedTile.id).firstChild.id == "whiteRook2"){
						whiteRook2Moved = true;
					}
					else if (document.getElementById(selectedTile.id).firstChild.id == "whiteKing"){
						whiteKingMoved = true;
					}
					/* Add captured black pieces to the taken black piece array. This allows for a visual representation of the taken pieces
					and is added for aesthetics. */
					if (playerTurn == "white"){
						targetPosition = event.target.parentElement.id;
						document.getElementById("takenBlack").appendChild(document.getElementById(event.target.parentElement.id).firstChild);
						document.getElementById(targetPosition).appendChild(document.getElementById(selectedTile.id).firstChild);
					}
					// Add captured white pieces to the taken white piece array. Same as above.
					else{
						targetPosition = event.target.parentElement.id;
						document.getElementById("takenWhite").appendChild(document.getElementById(event.target.parentElement.id).firstChild);
						document.getElementById(targetPosition).appendChild(document.getElementById(selectedTile.id).firstChild);
					}
					// If a pawn gets to the other side of the board, display the promotion table which allows the player to promote their pawn. 
					if(getSelectedPiece(selectedPiece) == "blackPawn"){
					
						if(document.getElementById(selectedPiece).parentElement.id == "a1" || document.getElementById(selectedPiece).parentElement.id == "b1" || 
						document.getElementById(selectedPiece).parentElement.id == "c1" || document.getElementById(selectedPiece).parentElement.id == "d1" || 
						document.getElementById(selectedPiece).parentElement.id == "e1" || document.getElementById(selectedPiece).parentElement.id == "f1" || 
						document.getElementById(selectedPiece).parentElement.id == "g1" || document.getElementById(selectedPiece).parentElement.id == "h1"){
							promotionTile = document.getElementById(selectedPiece).parentElement.id;
							promotedPawn = selectedPiece;
							document.getElementById("promoteBlack").style.display = "table";
							pawnPromotion = true;
						}
					}
					else if (getSelectedPiece(selectedPiece) == "whitePawn"){
				
						if(document.getElementById(selectedPiece).parentElement.id == "a8" || document.getElementById(selectedPiece).parentElement.id == "b8" || 
						document.getElementById(selectedPiece).parentElement.id == "c8" || document.getElementById(selectedPiece).parentElement.id == "d8" || 
						document.getElementById(selectedPiece).parentElement.id == "e8" || document.getElementById(selectedPiece).parentElement.id == "f8" || 
						document.getElementById(selectedPiece).parentElement.id == "g8" || document.getElementById(selectedPiece).parentElement.id == "h8"){
							promotionTile = document.getElementById(selectedPiece).parentElement.id;
							promotedPawn = selectedPiece;
							document.getElementById("promoteWhite").style.display = "table";
							pawnPromotion = true;
						}
					}
					if (playerTurn == "white"){
						playerTurn = "black";
					}
					else{
						playerTurn = "white";
					}
					if(pawnPromotion != true){
						moveArray.push("none");
					}
					else{
						moveArray.push(promotedPawn);
					}
				}	
				else{
					/* If the player clicks on a tile containing an opposing colors piece to capture, add the original tile the piece was in, 
					the id of the piece doing the capturing, the new tile the piece was placed in and the specific piece that was captured to the completed moves array. */	
					moveArray.push(selectedTile.id);
					moveArray.push(document.getElementById(selectedTile.id).firstChild.id);
					moveArray.push(event.target.id);
					moveArray.push(event.target.firstChild.id);
					selectedPiece = selectedTile.firstChild.id;
					// If any of the kings or rooks move, castling is no longer possible for that player.
					if (document.getElementById(selectedTile.id).firstChild.id == "blackRook1"){
						blackRook1Moved = true;
					}
					else if (document.getElementById(selectedTile.id).firstChild.id == "blackRook2"){
						blackRook2Moved = true;
					}
					else if(document.getElementById(selectedTile.id).firstChild.id == "blackKing"){
						blackKingMoved = true;
					}
					else if (document.getElementById(selectedTile.id).firstChild.id == "whiteRook1"){
						whiteRook1Moved = true;
					}
					else if (document.getElementById(selectedTile.id).firstChild.id == "whiteRook2"){
						whiteRook2Moved = true;
					}
					else if (document.getElementById(selectedTile.id).firstChild.id == "whiteKing"){
						whiteKingMoved = true;
					}
					// Place the captured piece into the taken array of the appropriate color to be displayed as a captured piece above or below the board.
					if (playerTurn == "white"){
						targetPosition = event.target.id;
						document.getElementById("takenBlack").appendChild(document.getElementById(event.target.id).firstChild);
						document.getElementById(targetPosition).appendChild(document.getElementById(selectedTile.id).firstChild);
					}
					else{
						targetPosition = event.target.id;
						
						document.getElementById("takenWhite").appendChild(document.getElementById(event.target.id).firstChild);
						document.getElementById(targetPosition).appendChild(document.getElementById(selectedTile.id).firstChild);
					}
					// If a pawn gets to the other end of the board, display the promotion table which allows the player to promote the pawn.
					if(getSelectedPiece(selectedPiece) == "blackPawn"){
					
						if(document.getElementById(selectedPiece).parentElement.id == "a1" || document.getElementById(selectedPiece).parentElement.id == "b1" || 
						document.getElementById(selectedPiece).parentElement.id == "c1" || document.getElementById(selectedPiece).parentElement.id == "d1" || 
						document.getElementById(selectedPiece).parentElement.id == "e1" || document.getElementById(selectedPiece).parentElement.id == "f1" || 
						document.getElementById(selectedPiece).parentElement.id == "g1" || document.getElementById(selectedPiece).parentElement.id == "h1"){
							promotionTile = document.getElementById(selectedPiece).parentElement.id;
							promotedPawn = selectedPiece;
							document.getElementById("promoteBlack").style.display = "table";
							pawnPromotion = true;
						}
					}
					else if (getSelectedPiece(selectedPiece) == "whitePawn"){
				
						if(document.getElementById(selectedPiece).parentElement.id == "a8" || document.getElementById(selectedPiece).parentElement.id == "b8" || 
						document.getElementById(selectedPiece).parentElement.id == "c8" || document.getElementById(selectedPiece).parentElement.id == "d8" || 
						document.getElementById(selectedPiece).parentElement.id == "e8" || document.getElementById(selectedPiece).parentElement.id == "f8" || 
						document.getElementById(selectedPiece).parentElement.id == "g8" || document.getElementById(selectedPiece).parentElement.id == "h8"){
							promotionTile = document.getElementById(selectedPiece).parentElement.id;
							promotedPawn = selectedPiece;
							document.getElementById("promoteWhite").style.display = "table";
							pawnPromotion = true;
						}
					}

					if (playerTurn == "white"){
						playerTurn = "black";
					}
					else{
						playerTurn = "white";				
					}
					if(pawnPromotion != true){
						moveArray.push("none");
					}
					else{
						moveArray.push(promotedPawn);
					}
				}
			}		
			resetBoardColors();
			selection = false;
			// Depending on player turn, check if the opposing players king is in check after a piece is moved.
			if(pawnPromotion == false){
				checkForCheck()
			}
		}
		else{
			// If the player clicks on a tile to select a piece and it passes the checks, proceed to the next portion of the code. 
			if(event.target.hasChildNodes && pieceArray.includes(event.target.firstChild)){
				if(checkPieceColor(event.target.firstChild.id) == playerTurn){
					turnCheck = true;
				}	
			}	
			// If the player clicks on a valid piece, and it passes the checks, proceed to the next portion of the code. 
			else if(pieceArray.includes(event.target)){
				if(checkPieceColor(event.target.id) == playerTurn){
					turnCheck = true;
				}
			}
			/* If the player clicked on a piece and that piece was of the corresponding color as the player, 
			then the tile under the piece is colored green to indicate that the piece is selected and the move available to that piece are calculated. 
			Additionally, the selected flag is set to true so that if a player clicks on a blue colored tile, the piece can be moved to that tile.*/
			if(turnCheck == true){
				if(pieceArray.includes(event.target)){
					selectedTile = document.getElementById(event.target.parentElement.id);
					for (val in boardTileArray){
						if (boardTileArray[val] == event.target.parentElement.id){
							selectedTilePosition = val;
						} 
					}
					selectedTile.style.backgroundColor = "green";
					selection = true;
					turnCheck = false;
					calculatePieceMoves(getSelectedPiece(event.target.id), selectedTilePosition, false);

				}
				//Same as above except this section only runs if the player clicks on a tile instead of a piece.
				else if (event.target.hasChildNodes() && pieceArray.includes(event.target.firstChild)){
					selectedTile = document.getElementById(event.target.id);
					for (val in boardTileArray){
						if (boardTileArray[val] == event.target.id){
							selectedTilePosition = val;
						} 
					}
					selectedTile.style.backgroundColor = "green";
					selection = true;
					turnCheck = false;
					calculatePieceMoves(getSelectedPiece(event.target.firstChild.id), selectedTilePosition, false);
				}
			}	
		}
	}
	/* The pawn promotion branch is run. Depending on the piece selected, 
	the pawn is converted and the information is stored in the moves array. */
	else{
		if(event.target.id == "blackRook11" || event.target.id == "blackKnight11" || event.target.id == "blackBishop11" || event.target.id == "blackQueen10"){
			document.getElementById(promotedPawn).parentElement.removeChild(document.getElementById(promotedPawn).parentElement.firstChild);
			document.getElementById("promoteBlack").style.display = "none";
			pawnPromotion = false

			if(event.target.id == "blackRook11"){
				let lastBlackRook = blackRookPromotionArray.pop()
				if (lastBlackRook == blackRook10){
					document.getElementById(promotionTile).appendChild(blackRook10);
				}
				else if (lastBlackRook == blackRook9){
					document.getElementById(promotionTile).appendChild(blackRook9);
				}
				else if (lastBlackRook == blackRook8){
					document.getElementById(promotionTile).appendChild(blackRook8);
				}
				else if (lastBlackRook == blackRook7){
					document.getElementById(promotionTile).appendChild(blackRook7);
				}
				else if (lastBlackRook == blackRook6){
					document.getElementById(promotionTile).appendChild(blackRook6);
				}
				else if (lastBlackRook == blackRook5){
					document.getElementById(promotionTile).appendChild(blackRook5);
				}
				else if (lastBlackRook == blackRook4){
					document.getElementById(promotionTile).appendChild(blackRook4);
				}
				else if (lastBlackRook == blackRook3){
					document.getElementById(promotionTile).appendChild(blackRook3);
				} 
			}
			else if(event.target.id == "blackKnight11"){
				let lastBlackKnight = blackKnightPromotionArray.pop()
				if (lastBlackKnight == blackKnight10){
					document.getElementById(promotionTile).appendChild(blackKnight10);
				}
				else if (lastBlackKnight == blackKnight9){
					document.getElementById(promotionTile).appendChild(blackKnight9);
				}
				else if (lastBlackKnight == blackKnight8){
					document.getElementById(promotionTile).appendChild(blackKnight8);
				}
				else if (lastBlackKnight == blackKnight7){
					document.getElementById(promotionTile).appendChild(blackKnight7);
				}
				else if (lastBlackKnight == blackKnight6){
					document.getElementById(promotionTile).appendChild(blackKnight6);
				}
				else if (lastBlackKnight == blackKnight5){
					document.getElementById(promotionTile).appendChild(blackKnight5);
				}
				else if (lastBlackKnight == blackKnight4){
					document.getElementById(promotionTile).appendChild(blackKnight4);
				}
				else if (lastBlackKnight == blackKnight3){
					document.getElementById(promotionTile).appendChild(blackKnight3);
				} 
			}
			else if(event.target.id == "blackBishop11"){
				let lastBlackBishop = blackBishopPromotionArray.pop()
				if (lastBlackBishop == blackBishop10){
					document.getElementById(promotionTile).appendChild(blackBishop10);
				}
				else if (lastBlackBishop == blackBishop9){
					document.getElementById(promotionTile).appendChild(blackBishop9);
				}
				else if (lastBlackBishop == blackBishop8){
					document.getElementById(promotionTile).appendChild(blackBishop8);
				}
				else if (lastBlackBishop == blackBishop7){
					document.getElementById(promotionTile).appendChild(blackBishop7);
				}
				else if (lastBlackBishop == blackBishop6){
					document.getElementById(promotionTile).appendChild(blackBishop6);
				}
				else if (lastBlackBishop == blackBishop5){
					document.getElementById(promotionTile).appendChild(blackBishop5);
				}
				else if (lastBlackBishop == blackBishop4){
					document.getElementById(promotionTile).appendChild(blackBishop4);
				}
				else if (lastBlackBishop == blackBishop3){
					document.getElementById(promotionTile).appendChild(blackBishop3);
				} 
			}
			else if(event.target.id == "blackQueen10"){
				let lastBlackQueen = blackQueenPromotionArray.pop()
				if (lastBlackQueen == blackQueen9){
					document.getElementById(promotionTile).appendChild(blackQueen9);
				}
				else if (lastBlackQueen == blackQueen8){
					document.getElementById(promotionTile).appendChild(blackQueen8);
				}
				else if (lastBlackQueen == blackQueen7){
					document.getElementById(promotionTile).appendChild(blackQueen7);
				}
				else if (lastBlackQueen == blackQueen6){
					document.getElementById(promotionTile).appendChild(blackQueen6);
				}
				else if (lastBlackQueen == blackQueen5){
					document.getElementById(promotionTile).appendChild(blackQueen5);
				}
				else if (lastBlackQueen == blackQueen4){
					document.getElementById(promotionTile).appendChild(blackQueen4);
				}
				else if (lastBlackQueen == blackQueen3){
					document.getElementById(promotionTile).appendChild(blackQueen3);
				}
				else if (lastBlackQueen == blackQueen2){
					document.getElementById(promotionTile).appendChild(blackQueen2);
				} 
			}
		}
		else if(event.target.id == "whiteRook11" || event.target.id == "whiteKnight11" || event.target.id == "whiteBishop11" || event.target.id == "whiteQueen10"){
			document.getElementById(promotedPawn).parentElement.removeChild(document.getElementById(promotedPawn).parentElement.firstChild);
			document.getElementById("promoteWhite").style.display = "none";
			pawnPromotion = false

			if(event.target.id == "whiteRook11"){
				let lastwhiteRook = whiteRookPromotionArray.pop()
				if (lastwhiteRook == whiteRook10){
					document.getElementById(promotionTile).appendChild(whiteRook10);
				}
				else if (lastwhiteRook == whiteRook9){
					document.getElementById(promotionTile).appendChild(whiteRook9);
				}
				else if (lastwhiteRook == whiteRook8){
					document.getElementById(promotionTile).appendChild(whiteRook8);
				}
				else if (lastwhiteRook == whiteRook7){
					document.getElementById(promotionTile).appendChild(whiteRook7);
				}
				else if (lastwhiteRook == whiteRook6){
					document.getElementById(promotionTile).appendChild(whiteRook6);
				}
				else if (lastwhiteRook == whiteRook5){
					document.getElementById(promotionTile).appendChild(whiteRook5);
				}
				else if (lastwhiteRook == whiteRook4){
					document.getElementById(promotionTile).appendChild(whiteRook4);
				}
				else if (lastwhiteRook == whiteRook3){
					document.getElementById(promotionTile).appendChild(whiteRook3);
				} 
			}
			else if(event.target.id == "whiteKnight11"){
				let lastWhiteKnight = whiteKnightPromotionArray.pop()
				if (lastWhiteKnight == whiteKnight10){
					document.getElementById(promotionTile).appendChild(whiteKnight10);
				}
				else if (lastWhiteKnight == whiteKnight9){
					document.getElementById(promotionTile).appendChild(whiteKnight9);
				}
				else if (lastWhiteKnight == whiteKnight8){
					document.getElementById(promotionTile).appendChild(whiteKnight8);
				}
				else if (lastWhiteKnight == whiteKnight7){
					document.getElementById(promotionTile).appendChild(whiteKnight7);
				}
				else if (lastWhiteKnight == whiteKnight6){
					document.getElementById(promotionTile).appendChild(whiteKnight6);
				}
				else if (lastWhiteKnight == whiteKnight5){
					document.getElementById(promotionTile).appendChild(whiteKnight5);
				}
				else if (lastWhiteKnight == whiteKnight4){
					document.getElementById(promotionTile).appendChild(whiteKnight4);
				}
				else if (lastWhiteKnight == whiteKnight3){
					document.getElementById(promotionTile).appendChild(whiteKnight3);
				} 
			}
			else if(event.target.id == "whiteBishop11"){
				let lastWhiteBishop = whiteBishopPromotionArray.pop()
				if (lastWhiteBishop == whiteBishop10){
					document.getElementById(promotionTile).appendChild(whiteBishop10);
				}
				else if (lastWhiteBishop == whiteBishop9){
					document.getElementById(promotionTile).appendChild(whiteBishop9);
				}
				else if (lastWhiteBishop == whiteBishop8){
					document.getElementById(promotionTile).appendChild(whiteBishop8);
				}
				else if (lastWhiteBishop == whiteBishop7){
					document.getElementById(promotionTile).appendChild(whiteBishop7);
				}
				else if (lastWhiteBishop == whiteBishop6){
					document.getElementById(promotionTile).appendChild(whiteBishop6);
				}
				else if (lastWhiteBishop == whiteBishop5){
					document.getElementById(promotionTile).appendChild(whiteBishop5);
				}
				else if (lastWhiteBishop == whiteBishop4){
					document.getElementById(promotionTile).appendChild(whiteBishop4);
				}
				else if (lastWhiteBishop == whiteBishop3){
					document.getElementById(promotionTile).appendChild(whiteBishop3);
				} 
			}
			else if(event.target.id == "whiteQueen10"){
				let lastWhiteQueen = whiteQueenPromotionArray.pop()
				if (lastWhiteQueen == whiteQueen9){
					document.getElementById(promotionTile).appendChild(whiteQueen9);
				}
				else if (lastWhiteQueen == whiteQueen8){
					document.getElementById(promotionTile).appendChild(whiteQueen8);
				}
				else if (lastWhiteQueen == whiteQueen7){
					document.getElementById(promotionTile).appendChild(whiteQueen7);
				}
				else if (lastWhiteQueen == whiteQueen6){
					document.getElementById(promotionTile).appendChild(whiteQueen6);
				}
				else if (lastWhiteQueen == whiteQueen5){
					document.getElementById(promotionTile).appendChild(whiteQueen5);
				}
				else if (lastWhiteQueen == whiteQueen4){
					document.getElementById(promotionTile).appendChild(whiteQueen4);
				}
				else if (lastWhiteQueen == whiteQueen3){
					document.getElementById(promotionTile).appendChild(whiteQueen3);
				}
				else if (lastWhiteQueen == whiteQueen2){
					document.getElementById(promotionTile).appendChild(whiteQueen2);
				} 
			}
		}
	}
	/* The undo last move section allows players to undo moves one step at a time. 
	Undoing a move related to pawn promotion undoes the pawn promotion and 
	undoing a castling move potentially allows for castling to be done again as a future move. */
	if(event.target.id == "undo_last_move" && selection != true){
		if(moveArray.length > 0){
			let promotedPiecePawn = moveArray.pop();
			let capturedPiece = moveArray.pop();
			let destinationTile = moveArray.pop();
			let attackingPiece = moveArray.pop();
			let originalTile = moveArray.pop();
			
				if (!(moveArray.includes("blackKing"))){
					blackKingMoved = false;
				}
				if (!(moveArray.includes("blackRook1"))){
					blackRook1Moved = false;
				}
				if (!(moveArray.includes("blackRook2"))){
					blackRook2Moved = false;
				}
				if (!(moveArray.includes("whiteKing"))){
					whiteKingMoved = false;
				}
				if (!(moveArray.includes("whiteRook1"))){
					whiteRook1Moved = false;
				}
				if (!(moveArray.includes("whiteRook2"))){
					whiteRook2Moved = false;
				}
			if(document.getElementById(destinationTile).hasChildNodes() == true && promotedPiecePawn != "none"){
				let promotedPiece = document.getElementById(destinationTile).firstChild.id;
				if (getSelectedPiece(promotedPiece) == "whiteBishop" || getSelectedPiece(promotedPiece) == "whiteQueen" || 
				getSelectedPiece(promotedPiece) == "whiteRook" || getSelectedPiece(promotedPiece) == "whiteKnight"){
					if(getSelectedPiece(promotedPiece) == "whiteBishop"){
						if (promotedPiece == "whiteBishop10"){
							whiteBishopPromotionArray.push(whiteBishop10);
						}
						else if(promotedPiece == "whiteBishop9"){
							whiteBishopPromotionArray.push(whiteBishop9);
						}
						else if(promotedPiece == "whiteBishop8"){
							whiteBishopPromotionArray.push(whiteBishop8);
						}
						else if(promotedPiece == "whiteBishop7"){
							whiteBishopPromotionArray.push(whiteBishop7);
						}
						else if(promotedPiece == "whiteBishop6"){
							whiteBishopPromotionArray.push(whiteBishop6);
						}
						else if(promotedPiece == "whiteBishop5"){
							whiteBishopPromotionArray.push(whiteBishop5);
						}
						else if(promotedPiece == "whiteBishop4"){
							whiteBishopPromotionArray.push(whiteBishop4);
						}
						else if(promotedPiece == "whiteBishop3"){
							whiteBishopPromotionArray.push(whiteBishop3);
						}
					}
					else if(getSelectedPiece(promotedPiece) == "whiteQueen"){
						if(promotedPiece == "whiteQueen9"){
							whiteQueenPromotionArray.push(whiteQueen9);
						}
						else if(promotedPiece == "whiteQueen8"){
							whiteQueenPromotionArray.push(whiteQueen8);
						}
						else if(promotedPiece == "whiteQueen7"){
							whiteQueenPromotionArray.push(whiteQueen7);
						}
						else if(promotedPiece == "whiteQueen6"){
							whiteQueenPromotionArray.push(whiteQueen6);
						}
						else if(promotedPiece == "whiteQueen5"){
							whiteQueenPromotionArray.push(whiteQueen5);
						}
						else if(promotedPiece == "whiteQueen4"){
							whiteQueenPromotionArray.push(whiteQueen4);
						}
						else if(promotedPiece == "whiteQueen3"){
							whiteQueenPromotionArray.push(whiteQueen3);
						}
						else if(promotedPiece == "whiteQueen2"){
							whiteQueenPromotionArray.push(whiteQueen2);
						}
					}
					else if(getSelectedPiece(promotedPiece) == "whiteRook"){
						if (promotedPiece == "whiteRook10"){
							whiteRookPromotionArray.push(whiteRook10);
						}
						else if(promotedPiece == "whiteRook9"){
							whiteRookPromotionArray.push(whiteRook9);
						}
						else if(promotedPiece == "whiteRook8"){
							whiteRookPromotionArray.push(whiteRook8);
						}
						else if(promotedPiece == "whiteRook7"){
							whiteRookPromotionArray.push(whiteRook7);
						}
						else if(promotedPiece == "whiteRook6"){
							whiteRookPromotionArray.push(whiteRook6);
						}
						else if(promotedPiece == "whiteRook5"){
							whiteRookPromotionArray.push(whiteRook5);
						}
						else if(promotedPiece == "whiteRook4"){
							whiteRookPromotionArray.push(whiteRook4);
						}
						else if(promotedPiece == "whiteRook3"){
							whiteRookPromotionArray.push(whiteRook3);
						}
					}
					else if(getSelectedPiece(promotedPiece) == "whiteKnight"){
						if (promotedPiece == "whiteKnight10"){
							whiteKnightPromotionArray.push(whiteKnight10);
						}
						else if(promotedPiece == "whiteKnight9"){
							whiteKnightPromotionArray.push(whiteKnight9);
						}
						else if(promotedPiece == "whiteKnight8"){
							whiteKnightPromotionArray.push(whiteKnight8);
						}
						else if(promotedPiece == "whiteKnight7"){
							whiteKnightPromotionArray.push(whiteKnight7);
						}
						else if(promotedPiece == "whiteKnight6"){
							whiteKnightPromotionArray.push(whiteKnight6);
						}
						else if(promotedPiece == "whiteKnight5"){
							whiteKnightPromotionArray.push(whiteKnight5);
						}
						else if(promotedPiece == "whiteKnight4"){
							whiteKnightPromotionArray.push(whiteKnight4);
						}
						else if(promotedPiece == "whiteKnight3"){
							whiteKnightPromotionArray.push(whiteKnight3);
						}
					}
					document.getElementById(destinationTile).removeChild(document.getElementById(destinationTile).firstChild);
				}
				else{
					if(getSelectedPiece(promotedPiece) == "blackBishop"){
						if (promotedPiece == "blackBishop10"){
							blackBishopPromotionArray.push(blackBishop10);
						}
						else if(promotedPiece == "blackBishop9"){
							blackBishopPromotionArray.push(blackBishop9);
						}
						else if(promotedPiece == "blackBishop8"){
							blackBishopPromotionArray.push(blackBishop8);
						}
						else if(promotedPiece == "blackBishop7"){
							blackBishopPromotionArray.push(blackBishop7);
						}
						else if(promotedPiece == "blackBishop6"){
							blackBishopPromotionArray.push(blackBishop6);
						}
						else if(promotedPiece == "blackBishop5"){
							blackBishopPromotionArray.push(blackBishop5);
						}
						else if(promotedPiece == "blackBishop4"){
							blackBishopPromotionArray.push(blackBishop4);
						}
						else if(promotedPiece == "blackBishop3"){
							blackBishopPromotionArray.push(blackBishop3);
						}
					}
					else if(getSelectedPiece(promotedPiece) == "blackQueen"){
						if (promotedPiece == "blackQueen10"){
							blackQueenPromotionArray.push(blackQueen10);
						}
						else if(promotedPiece == "blackQueen9"){
							blackQueenPromotionArray.push(blackQueen9);
						}
						else if(promotedPiece == "blackQueen8"){
							blackQueenPromotionArray.push(blackQueen8);
						}
						else if(promotedPiece == "blackQueen7"){
							blackQueenPromotionArray.push(blackQueen7);
						}
						else if(promotedPiece == "blackQueen6"){
							blackQueenPromotionArray.push(blackQueen6);
						}
						else if(promotedPiece == "blackQueen5"){
							blackQueenPromotionArray.push(blackQueen5);
						}
						else if(promotedPiece == "blackQueen4"){
							blackQueenPromotionArray.push(blackQueen4);
						}
						else if(promotedPiece == "blackQueen3"){
							blackQueenPromotionArray.push(blackQueen3);
						}
					}
					else if(getSelectedPiece(promotedPiece) == "blackRook"){
						if (promotedPiece == "blackRook10"){
							blackRookPromotionArray.push(blackRook10);
						}
						else if(promotedPiece == "blackRook9"){
							blackRookPromotionArray.push(blackRook9);
						}
						else if(promotedPiece == "blackRook8"){
							blackRookPromotionArray.push(blackRook8);
						}
						else if(promotedPiece == "blackRook7"){
							blackRookPromotionArray.push(blackRook7);
						}
						else if(promotedPiece == "blackRook6"){
							blackRookPromotionArray.push(blackRook6);
						}
						else if(promotedPiece == "blackRook5"){
							blackRookPromotionArray.push(blackRook5);
						}
						else if(promotedPiece == "blackRook4"){
							blackRookPromotionArray.push(blackRook4);
						}
						else if(promotedPiece == "blackRook3"){
							blackRookPromotionArray.push(blackRook3);
						}
					}
					else if(getSelectedPiece(promotedPiece) == "blackKnight"){
						if (promotedPiece == "blackKnight10"){
							blackKnightPromotionArray.push(blackKnight10);
						}
						else if(promotedPiece == "blackKnight9"){
							blackKnightPromotionArray.push(blackKnight9);
						}
						else if(promotedPiece == "blackKnight8"){
							blackKnightPromotionArray.push(blackKnight8);
						}
						else if(promotedPiece == "blackKnight7"){
							blackKnightPromotionArray.push(blackKnight7);
						}
						else if(promotedPiece == "blackKnight6"){
							blackKnightPromotionArray.push(blackKnight6);
						}
						else if(promotedPiece == "blackKnight5"){
							blackKnightPromotionArray.push(blackKnight5);
						}
						else if(promotedPiece == "blackKnight4"){
							blackKnightPromotionArray.push(blackKnight4);
						}
						else if(promotedPiece == "blackKnight3"){
							blackKnightPromotionArray.push(blackKnight3);
						}
					}
					document.getElementById(destinationTile).removeChild(document.getElementById(destinationTile).firstChild);	
				}
			}

			if (promotedPiecePawn != "none"){
				let pieceColor = getSelectedPiece(promotedPiecePawn);
				if (pieceColor == "whitePawn"){
					if(promotedPiecePawn == "whitePawn1"){
						document.getElementById(originalTile).appendChild(whitePawn1);
					}
					else if (promotedPiecePawn == "whitePawn2"){
						document.getElementById(originalTile).appendChild(whitePawn2);
					}
					else if (promotedPiecePawn == "whitePawn3"){
						document.getElementById(originalTile).appendChild(whitePawn3);
					}
					else if (promotedPiecePawn == "whitePawn4"){
						document.getElementById(originalTile).appendChild(whitePawn4);
					}
					else if (promotedPiecePawn == "whitePawn5"){
						document.getElementById(originalTile).appendChild(whitePawn5);
					}
					else if (promotedPiecePawn == "whitePawn6"){
						document.getElementById(originalTile).appendChild(whitePawn6);
					}
					else if (promotedPiecePawn == "whitePawn7"){
						document.getElementById(originalTile).appendChild(whitePawn7);
					}
					else if (promotedPiecePawn == "whitePawn8"){
						document.getElementById(originalTile).appendChild(whitePawn8);
					}
				}
				else if (pieceColor == "blackPawn"){
					if(promotedPiecePawn == "blackPawn1"){
						document.getElementById(originalTile).appendChild(blackPawn1);
					}
					else if (promotedPiecePawn == "blackPawn2"){
						document.getElementById(originalTile).appendChild(blackPawn2);
					}
					else if (promotedPiecePawn == "blackPawn3"){
						document.getElementById(originalTile).appendChild(blackPawn3);
					}
					else if (promotedPiecePawn == "blackPawn4"){
						document.getElementById(originalTile).appendChild(blackPawn4);
					}
					else if (promotedPiecePawn == "blackPawn5"){
						document.getElementById(originalTile).appendChild(blackPawn5);
					}
					else if (promotedPiecePawn == "blackPawn6"){
						document.getElementById(originalTile).appendChild(blackPawn6);
					}
					else if (promotedPiecePawn == "blackPawn7"){
						document.getElementById(originalTile).appendChild(blackPawn7);
					}
					else if (promotedPiecePawn == "blackPawn8"){
						document.getElementById(originalTile).appendChild(blackPawn8);
					}
				}
			}
			else{
				document.getElementById(originalTile).appendChild(document.getElementById(attackingPiece));
			}
			if(capturedPiece != "none"){
				document.getElementById(destinationTile).appendChild(document.getElementById(capturedPiece));
			}
			if (playerTurn == "white"){
				playerTurn = "black";
			}
			else{
				playerTurn = "white";
			}
		}
	}	
});
// Uses the board color array to reset the board colors to their default values after a piece is selected and its potential moves are shown.
function resetBoardColors(){
	for (val in boardTileArray){
		if(boardColorArray[val] == "w"){
		document.getElementById(boardTileArray[val]).style.backgroundColor = "whitesmoke";
		}
		else{
			document.getElementById(boardTileArray[val]).style.backgroundColor = "darkorange";
		}
	}
}
// Returns a simplified piece type for any individual piece.
function getSelectedPiece(pieceId){
if (pieceId == "blackPawn1" || pieceId == "blackPawn2" || pieceId == "blackPawn3" || pieceId == "blackPawn4" || pieceId == "blackPawn5" || pieceId == "blackPawn6" || 
	pieceId == "blackPawn7" || pieceId == "blackPawn8" ){
	return "blackPawn";
	} 
else if (pieceId == "whitePawn1" || pieceId == "whitePawn2" || pieceId == "whitePawn3" || pieceId == "whitePawn4" ||
pieceId == "whitePawn5" || pieceId == "whitePawn6" || pieceId == "whitePawn7" || pieceId == "whitePawn8"){
	return "whitePawn";
}	
else if (pieceId == "blackRook1" || pieceId == "blackRook2" || pieceId == "blackRook3" || pieceId == "blackRook4" || 
pieceId == "blackRook5" || pieceId == "blackRook6" || pieceId == "blackRook7" || pieceId == "blackRook8" || pieceId == "blackRook9" || pieceId == "blackRook10"){
	return "blackRook";
}	
else if (pieceId == "whiteRook1" || pieceId == "whiteRook2" || pieceId == "whiteRook3" || pieceId == "whiteRook4" || pieceId == "whiteRook5" || 
pieceId == "whiteRook6" || pieceId == "whiteRook7" || pieceId == "whiteRook8" || pieceId == "whiteRook9" || pieceId == "whiteRook10"){
	return "whiteRook";
}
else if (pieceId == "blackKnight1" || pieceId == "blackKnight2" || pieceId == "blackKnight3" || pieceId == "blackKnight4" || pieceId == "blackKnight5" || 
pieceId == "blackKnight6" || pieceId == "blackKnight7" || pieceId == "blackKnight8" || pieceId == "blackKnight9" || pieceId == "blackKnight10"){
	return "blackKnight";
}
else if(pieceId == "whiteKnight1" || pieceId == "whiteKnight2" || pieceId == "whiteKnight3" || pieceId == "whiteKnight4" || pieceId == "whiteKnight5" || 
pieceId == "whiteKnight6" || pieceId == "whiteKnight7" || pieceId == "whiteKnight8" || pieceId == "whiteKnight9" || pieceId == "whiteKnight10"){
	return "whiteKnight";
}
else if (pieceId == "blackBishop1" || pieceId == "blackBishop2" || pieceId == "blackBishop3" || pieceId == "blackBishop4" || pieceId == "blackBishop5" || 
pieceId == "blackBishop6" || pieceId == "blackBishop7" || pieceId == "blackBishop8" || pieceId == "blackBishop9" || pieceId == "blackBishop10"){
	return "blackBishop";
}
else if (pieceId == "whiteBishop1" || pieceId == "whiteBishop2"  || pieceId == "whiteBishop3" || pieceId == "whiteBishop4" || pieceId == "whiteBishop5" || 
pieceId == "whiteBishop6" || pieceId == "whiteBishop7" || pieceId == "whiteBishop8" || pieceId == "whiteBishop9" || pieceId == "whiteBishop10"){
	return "whiteBishop";
}
else if (pieceId == "blackKing"){
	return "blackKing";
}
else if (pieceId == "whiteKing"){
	return "whiteKing";
}
else if (pieceId == "blackQueen" || pieceId == "blackQueen2" || pieceId == "blackQueen3" || pieceId == "blackQueen4" 
|| pieceId == "blackQueen5" || pieceId == "blackQueen6" || pieceId == "blackQueen7" || pieceId == "blackQueen8" || pieceId == "blackQueen9"){
	return "blackQueen";
}
else if(pieceId == "whiteQueen" || pieceId == "whiteQueen2"  || pieceId == "whiteQueen3" || pieceId == "whiteQueen4" ||
 pieceId == "whiteQueen5" || pieceId == "whiteQueen6" || pieceId == "whiteQueen7" || pieceId == "whiteQueen8"  || pieceId == "whiteQueen9"){
	return "whiteQueen";
}
}
// Returns the corresponding player color for the input piece type.
function checkPieceColor(pieceType){
	if(pieceType != null){
		if (getSelectedPiece(pieceType) ==  "whitePawn" ||  getSelectedPiece(pieceType) == "whiteBishop" ||  getSelectedPiece(pieceType) == "whiteKnight"
		||  getSelectedPiece(pieceType) == "whiteKing" ||  getSelectedPiece(pieceType) == "whiteQueen" ||  getSelectedPiece(pieceType) == "whiteRook"){
			return "white";
		}
		else{
			return "black";
		}
	}

}
// Returns all pieces currently in play on the board.
function getPiecesOnBoard(){
	piecesOnBoardArray = new Array();
	for (val in boardTileArray){
		if(document.getElementById(boardTileArray[val]).hasChildNodes() == true){
			piecesOnBoardArray.push(document.getElementById(boardTileArray[val]).firstChild.id);
		}
	}
	return piecesOnBoardArray;
}
// Separates the pieces returned by the get pieces on board function and returns only the pieces of the opposing player color on a given turn.
function getPiecesOnBoardByColor(){
	let allPiecesArray = getPiecesOnBoard();
	let blackPieceArray = new Array();
	let whitePieceArray = new Array();
	for (val in allPiecesArray){
		if(playerTurn == "white"){
			if(getSelectedPiece(allPiecesArray[val]) == ("blackPawn") || getSelectedPiece(allPiecesArray[val]) ==  "blackRook" || 
			getSelectedPiece(allPiecesArray[val]) == "blackQueen" || getSelectedPiece(allPiecesArray[val]) == "blackKnight" || 
			getSelectedPiece(allPiecesArray[val]) == "blackKing" || getSelectedPiece(allPiecesArray[val]) ==  "blackBishop"){
				blackPieceArray.push(allPiecesArray[val]);
			}
		}
		else{
			if(getSelectedPiece(allPiecesArray[val]) == ("whitePawn") || getSelectedPiece(allPiecesArray[val]) ==  "whiteRook" || 
			getSelectedPiece(allPiecesArray[val]) == "whiteQueen" || getSelectedPiece(allPiecesArray[val]) == "whiteKnight" || 
			getSelectedPiece(allPiecesArray[val]) == "whiteKing" || getSelectedPiece(allPiecesArray[val]) ==  "whiteBishop"){
				whitePieceArray.push(allPiecesArray[val]);
			}
		}
	}
	if(playerTurn == "white"){
		return blackPieceArray;
	}
	else{
		return whitePieceArray;
	}
}
/* Runs through all available moves for each enemy piece and colors all relevant tiles blue. If the king is sitting on a tile that is then blue, 
the tile color is set to red to indicate that the king is in check. */
function checkForCheck(){
	let enemyPiecesArray = getPiecesOnBoardByColor();
	let whiteKingCheck = false;
	let blackKingCheck = false;
	for (val in enemyPiecesArray){
		let parentTile = document.getElementById(enemyPiecesArray[val]).parentElement.id;
		for (tile in boardTileArray){
			if (boardTileArray[tile] == parentTile){
				parentTile = tile;
			} 
		}
		calculatePieceMoves(getSelectedPiece(enemyPiecesArray[val]), parentTile, true);
	}
	if(playerTurn == "white" && document.getElementById("whiteKing").parentElement.style.backgroundColor == "blue"){
		whiteKingCheck = true;
	}
	else if(playerTurn == "black" && document.getElementById("blackKing").parentElement.style.backgroundColor == "blue"){
		blackKingCheck = true;
	}
	resetBoardColors();
	if(whiteKingCheck == true){
		document.getElementById("whiteKing").parentElement.style.backgroundColor = "red";
	}
	else if(blackKingCheck == true){
		document.getElementById("blackKing").parentElement.style.backgroundColor = "red";
	}
}
/* For any given piece, calculate the moves available to that piece and color the tiles that a piece can move to as blue. 
For every piece there is a second set of logic which only pertains for checking if a potential move would put the players own king in check.
As putting your own king in check is illegal in the rules of chess, any moves which would do so are not allowed.
Moves that take your king out of check, however, are allowed.*/
function calculatePieceMoves(pieceType, tilePosition, check){
	let blockedPath = false;
	if(selectedTile.hasChildNodes() == true){
		selectedPiece = selectedTile.firstChild.id;
	}
	if (pieceType == "blackPawn" && check == false){
		let movesArray = new Array();
		let potentialMoves = parseInt(tilePosition);	
		potentialMoves = potentialMoves + 1;
		if (document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
			document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
			checkForCheck();
			selectedTile.style.backgroundColor = "green";
			document.getElementById(boardTileArray[potentialMoves - 1]).appendChild(document.getElementById(selectedPiece));
			if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
				movesArray.push(boardTileArray[potentialMoves]);
			}	
		}
		else{
			blockedPath = true;
		}
		potentialMoves = potentialMoves - 8;
		if (potentialMoves >= 0){
			if (document.getElementById(boardTileArray[potentialMoves]).firstChild != null){
				if (checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
					document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
					checkForCheck()
					selectedTile.style.backgroundColor = "green";
					document.getElementById(boardTileArray[potentialMoves + 7]).appendChild(document.getElementById(selectedPiece));
					if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
						movesArray.push(boardTileArray[potentialMoves]);			
					}
				}
			}
		}
		potentialMoves = potentialMoves + 16;
		if (potentialMoves <= 63){
			if (document.getElementById(boardTileArray[potentialMoves]).firstChild != null){
				if (checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
					document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
					checkForCheck()
					selectedTile.style.backgroundColor = "green";
					document.getElementById(boardTileArray[potentialMoves - 9]).appendChild(document.getElementById(selectedPiece));
					if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
						movesArray.push(boardTileArray[potentialMoves]);		
					}
				}
			}
		}
		potentialMoves = parseInt(selectedTilePosition);
		potentialMoves = potentialMoves + 1;
		if((potentialMoves + 6) % 8 == 0 && blockedPath == false){
			potentialMoves = potentialMoves + 1;
			if (document.getElementById(boardTileArray[potentialMoves]).firstChild === null){
				document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
				checkForCheck();
				selectedTile.style.backgroundColor = "green";
				document.getElementById(boardTileArray[potentialMoves - 2]).appendChild(document.getElementById(selectedPiece));
				if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
					movesArray.push(boardTileArray[potentialMoves]);
				}
			}
		}
		for(val in movesArray){
			document.getElementById(movesArray[val]).style.backgroundColor = "blue";
		}
	}
	else if (pieceType == "blackPawn" && check == true){
		let potentialEnemyMoves = parseInt(tilePosition);	
		potentialEnemyMoves = potentialEnemyMoves + 1;
		if (document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
			document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";		
				
		}
		else{
			blockedPath = true;
		}
		potentialEnemyMoves = potentialEnemyMoves - 8;
		if (potentialEnemyMoves >= 0){
			if (document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null){
				if (checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
					document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
				}
			}
		}
		potentialEnemyMoves = potentialEnemyMoves + 16;
		if (potentialEnemyMoves <= 63){
			if (document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null){
				if (checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
					document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
				}
			}
		}
		potentialEnemyMoves = parseInt(selectedTilePosition);
		potentialEnemyMoves = potentialEnemyMoves + 1;
		if((potentialEnemyMoves + 6) % 8 == 0 && blockedPath == false){
			potentialEnemyMoves = potentialEnemyMoves + 1;
			if (document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild === null){
				document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
			}
		}
	}
	if (pieceType == "whitePawn" && check == false){
		let movesArray = new Array();
		let potentialMoves = parseInt(tilePosition);	
		potentialMoves = potentialMoves - 1;
		if (document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
			document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
			checkForCheck();
			selectedTile.style.backgroundColor = "green";
			document.getElementById(boardTileArray[potentialMoves + 1]).appendChild(document.getElementById(selectedPiece));
			if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
				movesArray.push(boardTileArray[potentialMoves]);
			}					
		}
		else{
			blockedPath = true;
		}
		potentialMoves = potentialMoves - 8;
		if (potentialMoves >= 0){
			if (document.getElementById(boardTileArray[potentialMoves]).firstChild != null){
				if (checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
					document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
					checkForCheck()
					selectedTile.style.backgroundColor = "green";
					document.getElementById(boardTileArray[potentialMoves + 9]).appendChild(document.getElementById(selectedPiece));
					if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
						movesArray.push(boardTileArray[potentialMoves]);			
					}
				}
			}
		}
		potentialMoves = potentialMoves + 16;
		if (potentialMoves <= 63){
			if (document.getElementById(boardTileArray[potentialMoves]).firstChild != null){
				if (checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
					document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
					checkForCheck()
					selectedTile.style.backgroundColor = "green";
					document.getElementById(boardTileArray[potentialMoves - 7]).appendChild(document.getElementById(selectedPiece));
					if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
						movesArray.push(boardTileArray[potentialMoves]);		
					}
				}
			}
		}
		potentialMoves = parseInt(selectedTilePosition);
		potentialMoves = potentialMoves - 1;
		if((potentialMoves + 3) % 8 == 0 && blockedPath == false){
			potentialMoves = potentialMoves - 1;
			if (document.getElementById(boardTileArray[potentialMoves]).firstChild === null){
				document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
				checkForCheck();
				selectedTile.style.backgroundColor = "green";
				document.getElementById(boardTileArray[potentialMoves + 2]).appendChild(document.getElementById(selectedPiece));
				if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
					movesArray.push(boardTileArray[potentialMoves]);
				}
			}
		}
		for(val in movesArray){
			document.getElementById(movesArray[val]).style.backgroundColor = "blue";
		}
	}
	else if (pieceType == "whitePawn" && check == true){
		let potentialEnemyMoves = parseInt(tilePosition);	
		potentialEnemyMoves = potentialEnemyMoves - 1;
		if (document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
			document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
		}
		else{
			blockedPath = true;
		}
		potentialEnemyMoves = potentialEnemyMoves - 8;
		if (potentialEnemyMoves >= 0){
			if (document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null){
				if (checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
					document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
				}
			}
		}
		potentialEnemyMoves = potentialEnemyMoves + 16;
		if (potentialEnemyMoves <= 63){
			if (document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null){
				if (checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
					document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
				}
			}
		}
		potentialEnemyMoves = parseInt(selectedTilePosition);
		potentialEnemyMoves = potentialEnemyMoves - 1;	
		if((potentialEnemyMoves + 3) % 8 == 0 && blockedPath == false){
			potentialEnemyMoves = potentialEnemyMoves - 1;
			if (document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild === null){
				document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
			}
		}

	}
	if (pieceType == "blackRook" && check == false){
		let movesArray = new Array();
		let potentialMoves = parseInt(tilePosition);	
		let potentialMovesHolder = potentialMoves;
		let takenPiece = "";
		while(potentialMoves >= 0){
			potentialMoves = potentialMoves - 8;
			if(potentialMoves >= 0){
				if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
					document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
					checkForCheck()
					selectedTile.style.backgroundColor = "green";
					document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
					if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
					}
				}
				else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
				checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
					takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
					document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
					document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
					checkForCheck()
					selectedTile.style.backgroundColor = "green";
					document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
					document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
					if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
					}
					potentialMoves = -1;
				}
				else{
					potentialMoves = -1;
				}

			}
		}
		potentialMoves = potentialMovesHolder;
		if((potentialMoves) % 8 != 0){
			while(potentialMoves >= 0){
				potentialMoves--;
				if(potentialMoves >= 0){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						if ((potentialMoves) % 8 == 0){
							potentialMoves = -1;
						}
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = -1;
					}
					else{
						potentialMoves = -1;
					}
				}
			}	
		}
		potentialMoves = potentialMovesHolder;
		if((potentialMoves + 1) % 8 != 0){
			while(potentialMoves <= 63){
				potentialMoves++;
				if(potentialMoves <= 63){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						if ((potentialMoves + 1) % 8 == 0){
							potentialMoves = 64;
						}
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = 64;
					}
					else{
						potentialMoves = 64;
					}
				}
			}	
		}	
		potentialMoves = potentialMovesHolder;
		while(potentialMoves <= 63){
			potentialMoves = potentialMoves + 8;
			if(potentialMoves <= 63){
				if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
					document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
					checkForCheck()
					selectedTile.style.backgroundColor = "green";
					document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
					if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
						movesArray.push(boardTileArray[potentialMoves]);
					}
				}
				else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
				checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
					takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
					document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
					document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
					checkForCheck()
					selectedTile.style.backgroundColor = "green";
					document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
					document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
					if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
						movesArray.push(boardTileArray[potentialMoves]);
					}
					potentialMoves = 64;
				}
				else{
					potentialMoves = 64;
				}
			}
		}
		for(val in movesArray){
			document.getElementById(movesArray[val]).style.backgroundColor = "blue";
		}
	}
	else if (pieceType == "blackRook" && check == true){
		let potentialEnemyMoves = parseInt(tilePosition);	
		let potentialEnemyMovesHolder = potentialEnemyMoves;
		while(potentialEnemyMoves >= 0){
			potentialEnemyMoves = potentialEnemyMoves - 8;
			if(potentialEnemyMoves >= 0){
				if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
					document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
				}
				else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
				checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
					document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
					potentialEnemyMoves = -1;
				}
				else{
					potentialEnemyMoves = -1;
				}
			}
		}
		potentialEnemyMoves = potentialEnemyMovesHolder;
		if((potentialEnemyMoves) % 8 != 0){
			while(potentialEnemyMoves >= 0){
				potentialEnemyMoves--;
				if(potentialEnemyMoves >= 0){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						if ((potentialEnemyMoves) % 8 == 0){
							potentialEnemyMoves = -1;
						}
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else{
						potentialEnemyMoves = -1;
					}
				}
			}	
		}
		potentialEnemyMoves = potentialEnemyMovesHolder;
		if((potentialEnemyMoves + 1) % 8 != 0){
			while(potentialEnemyMoves <= 63){
				potentialEnemyMoves++;
				if(potentialEnemyMoves <= 63){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						if ((potentialEnemyMoves + 1) % 8 == 0){
							potentialEnemyMoves = 64;
						}
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else{
						potentialEnemyMoves = 64;
					}
				}
			}	
		}	
		potentialEnemyMoves = potentialEnemyMovesHolder;
		while(potentialEnemyMoves <= 63){
			potentialEnemyMoves = potentialEnemyMoves + 8;
			if(potentialEnemyMoves <= 63){
				if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
					document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
				}
				else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
				checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
					document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
					potentialEnemyMoves = 64;
				}
				else{
					potentialEnemyMoves = 64;
				}
			}
		}
	}
	if (pieceType == "whiteRook" && check == false){
		let movesArray = new Array();
		let potentialMoves = parseInt(tilePosition);	
		let potentialMovesHolder = potentialMoves;
		while(potentialMoves >= 0){
			potentialMoves = potentialMoves - 8;
			if(potentialMoves >= 0){
				if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
					document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
                	checkForCheck()
					selectedTile.style.backgroundColor = "green";
                	document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
                	if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
                        movesArray.push(boardTileArray[potentialMoves]);
                	}
				}
				else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
				checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
					takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
                	document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
                	document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
                	checkForCheck()
					selectedTile.style.backgroundColor = "green";
                	document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
                	document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
                	if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
                            movesArray.push(boardTileArray[potentialMoves]);
                	}
					potentialMoves = -1;
				}
				else{
					potentialMoves = -1;
				}
			}
		}
		potentialMoves = potentialMovesHolder;
		if((potentialMoves) % 8 != 0){
			while(potentialMoves >= 0){
				potentialMoves--;
				if(potentialMoves >= 0){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
                		checkForCheck()
						selectedTile.style.backgroundColor = "green";
                		document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
                		if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
                        movesArray.push(boardTileArray[potentialMoves]);
                		}
						if ((potentialMoves) % 8 == 0){
							potentialMoves = -1;
						}
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
                		document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
                		document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
                		checkForCheck()
						selectedTile.style.backgroundColor = "green";
                		document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
                		document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
                		if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
                            movesArray.push(boardTileArray[potentialMoves]);
                		}
						potentialMoves = -1;
					}
					else{
						potentialMoves = -1;
					}
				}
			}	
		}
		potentialMoves = potentialMovesHolder;
		if((potentialMoves + 1) % 8 != 0){
			while(potentialMoves <= 63){
				potentialMoves++;
				if(potentialMoves <= 63){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
                		checkForCheck()
						selectedTile.style.backgroundColor = "green";
                		document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
                		if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
                        movesArray.push(boardTileArray[potentialMoves]);
                		}
						if ((potentialMoves + 1) % 8 == 0){
							potentialMoves = 64;
						}
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = 64;
					}
					else{
						potentialMoves = 64;
					}
				}
			}	
		}	
		potentialMoves = potentialMovesHolder;
		while(potentialMoves <= 63){
			potentialMoves = potentialMoves + 8;
			if(potentialMoves <= 63){
				if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
					document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
                	checkForCheck()
					selectedTile.style.backgroundColor = "green";
                	document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
                	if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
                        movesArray.push(boardTileArray[potentialMoves]);
                	}
				}
				else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
				checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
					takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
                	document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
                	document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
                	checkForCheck()
					selectedTile.style.backgroundColor = "green";
                	document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
                	document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
                	if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
                            movesArray.push(boardTileArray[potentialMoves]);
                	}
					potentialMoves = 64;
				}
				else{
					potentialMoves = 64;
				}
			}
		}
		for(val in movesArray){
			document.getElementById(movesArray[val]).style.backgroundColor = "blue";
		}
	}
	else if (pieceType == "whiteRook" && check == true){
		let potentialEnemyMoves = parseInt(tilePosition);	
		let potentialEnemyMovesHolder = potentialEnemyMoves;
		while(potentialEnemyMoves >= 0){
			potentialEnemyMoves = potentialEnemyMoves - 8;
			if(potentialEnemyMoves >= 0){
				if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
					document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
				}
				else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
				checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
					document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
					potentialEnemyMoves = -1;
				}
				else{
					potentialEnemyMoves = -1;
				}
			}
		}
		potentialEnemyMoves = potentialEnemyMovesHolder;
		if((potentialEnemyMoves) % 8 != 0){
			while(potentialEnemyMoves >= 0){
				potentialEnemyMoves--;
				if(potentialEnemyMoves >= 0){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						if ((potentialEnemyMoves) % 8 == 0){
							potentialEnemyMoves = -1;
						}
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else{
						potentialEnemyMoves = -1;
					}
				}
			}	
		}
		potentialEnemyMoves = potentialEnemyMovesHolder;
		if((potentialEnemyMoves + 1) % 8 != 0){
			while(potentialEnemyMoves <= 63){
				potentialEnemyMoves++;
				if(potentialEnemyMoves <= 63){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						if ((potentialEnemyMoves + 1) % 8 == 0){
							potentialEnemyMoves = 64;
						}
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else{
						potentialEnemyMoves = 64;
					}
				}
			}	
		}	
		potentialEnemyMoves = potentialEnemyMovesHolder;
		while(potentialEnemyMoves <= 63){
			potentialEnemyMoves = potentialEnemyMoves + 8;
			if(potentialEnemyMoves <= 63){
				if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
					document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
				}
				else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
				checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
					document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
					potentialEnemyMoves = 64;
				}
				else{
					potentialEnemyMoves = 64;
				}
			}
		}
	}
	if (pieceType == "blackKnight" && check == false){
		let movesArray = new Array();
		let potentialMoves = parseInt(tilePosition);	
		let potentialMovesHolder = potentialMoves;
		if(potentialMoves % 8 != 0){
			while(potentialMoves >= 0){
				potentialMoves = potentialMoves - 17;
				if(potentialMoves >= 0){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = -1;
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = -1;
					}
					else{
						potentialMoves = -1;
					}
				}
			}
		}	
		potentialMoves = potentialMovesHolder;
		if(potentialMoves % 8 != 0 && (potentialMoves + 1) % 8 != 0){
			while(potentialMoves >= 0){
				potentialMoves = potentialMoves - 15;
				if(potentialMoves >= 0){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = -1;
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = -1;
					}
					else{
						potentialMoves = -1;
					}
				}
			}
		}	
		potentialMoves = potentialMovesHolder;
		if(potentialMoves % 8 != 0 && (potentialMoves - 1) % 8 != 0){
			while(potentialMoves >= 0){
				potentialMoves = potentialMoves - 10;
				if(potentialMoves >= 0){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = -1;
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = -1;
					}
					else{
						potentialMoves = -1;
					}
				}
			}
		}	
		potentialMoves = potentialMovesHolder;
		if((potentialMoves + 1) % 8 != 0  && (potentialMoves + 2) % 8 != 0 ){
			while(potentialMoves >= 0){
				potentialMoves = potentialMoves - 6;
				if(potentialMoves >= 0){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = -1;
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = -1;
					}
					else{
						potentialMoves = -1;
					}
				}
			}
		}
		potentialMoves = potentialMovesHolder;
		if(potentialMoves % 8 != 0 && (potentialMoves - 1) % 8 != 0){
			while(potentialMoves <= 63){
				potentialMoves = potentialMoves + 6;
				if(potentialMoves <= 63){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = 64;
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = 64;
					}
					else{
						potentialMoves = 64;
					}
				}
			}
		}	
		potentialMoves = potentialMovesHolder;
		if((potentialMoves + 1) % 8 != 0 && (potentialMoves + 2) % 8 != 0){
			while(potentialMoves <= 63){
				potentialMoves = potentialMoves + 10;
				if(potentialMoves <= 63){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = 64;
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = 64;
					}
					else{
						potentialMoves = 64;
					}
				}
			}
		}
		potentialMoves = potentialMovesHolder;
		if(potentialMoves % 8 != 0){
			while(potentialMoves <= 63){
				potentialMoves = potentialMoves + 15;
				if(potentialMoves <= 63){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = 64;
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = 64;
					}
					else{
						potentialMoves = 64;
					}
				}
			}
		}	
		potentialMoves = potentialMovesHolder;
		if((potentialMoves + 1) % 8 != 0){
			while(potentialMoves <= 63){
				potentialMoves = potentialMoves + 17;
				if(potentialMoves <= 63){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = 64;
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = 64;
					}
					else{
						potentialMoves = 64;
					}
				}
			}
		}
		for(val in movesArray){
			document.getElementById(movesArray[val]).style.backgroundColor = "blue";
		}
	}
	if (pieceType == "blackKnight" && check == true){
		let potentialEnemyMoves = parseInt(tilePosition);	
		let potentialEnemyMovesHolder = potentialEnemyMoves;
		if(potentialEnemyMoves % 8 != 0){
			while(potentialEnemyMoves >= 0){
				potentialEnemyMoves = potentialEnemyMoves - 17;
				if(potentialEnemyMoves >= 0){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else{
						potentialEnemyMoves = -1;
					}
				}
			}
		}	
		potentialEnemyMoves = potentialEnemyMovesHolder;
		if(potentialEnemyMoves % 8 != 0 && (potentialEnemyMoves + 1) % 8 != 0){
			while(potentialEnemyMoves >= 0){
				potentialEnemyMoves = potentialEnemyMoves - 15;
				if(potentialEnemyMoves >= 0){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else{
						potentialEnemyMoves = -1;
					}
				}
			}
		}	
		potentialEnemyMoves = potentialEnemyMovesHolder;
		if(potentialEnemyMoves % 8 != 0 && (potentialEnemyMoves - 1) % 8 != 0){
			while(potentialEnemyMoves >= 0){
				potentialEnemyMoves = potentialEnemyMoves - 10;
				if(potentialEnemyMoves >= 0){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else{
						potentialEnemyMoves = -1;
					}
				}
			}
		}	
		potentialEnemyMoves = potentialEnemyMovesHolder;
		if((potentialEnemyMoves + 1) % 8 != 0  && (potentialEnemyMoves + 2) % 8 != 0 ){
			while(potentialEnemyMoves >= 0){
				potentialEnemyMoves = potentialEnemyMoves - 6;
				if(potentialEnemyMoves >= 0){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else{
						potentialEnemyMoves = -1;
					}
				}
			}
		}
		potentialEnemyMoves = potentialEnemyMovesHolder;
		if(potentialEnemyMoves % 8 != 0 && (potentialEnemyMoves - 1) % 8 != 0){
			while(potentialEnemyMoves <= 63){
				potentialEnemyMoves = potentialEnemyMoves + 6;
				if(potentialEnemyMoves <= 63){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else{
						potentialEnemyMoves = 64;
					}
				}
			}
		}	
		potentialEnemyMoves = potentialEnemyMovesHolder;
		if((potentialEnemyMoves + 1) % 8 != 0 && (potentialEnemyMoves + 2) % 8 != 0){
			while(potentialEnemyMoves <= 63){
				potentialEnemyMoves = potentialEnemyMoves + 10;
				if(potentialEnemyMoves <= 63){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else{
						potentialEnemyMoves = 64;
					}
				}
			}
		}
		potentialEnemyMoves = potentialEnemyMovesHolder;
		if(potentialEnemyMoves % 8 != 0){
			while(potentialEnemyMoves <= 63){
				potentialEnemyMoves = potentialEnemyMoves + 15;
				if(potentialEnemyMoves <= 63){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else{
						potentialEnemyMoves = 64;
					}
				}
			}
		}	
		potentialEnemyMoves = potentialEnemyMovesHolder;
		if((potentialEnemyMoves + 1) % 8 != 0){
			while(potentialEnemyMoves <= 63){
				potentialEnemyMoves = potentialEnemyMoves + 17;
				if(potentialEnemyMoves <= 63){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else{
						potentialEnemyMoves = 64;
					}
				}
			}
		}
	}
	if (pieceType == "whiteKnight" && check == false){
		let movesArray = new Array();
		let potentialMoves = parseInt(tilePosition);	
		let potentialMovesHolder = potentialMoves;
		if(potentialMoves % 8 != 0){
			while(potentialMoves >= 0){
				potentialMoves = potentialMoves - 17;
				if(potentialMoves >= 0){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = -1;
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = -1;
					}
					else{
						potentialMoves = -1;
					}
				}
			}
		}	
		potentialMoves = potentialMovesHolder;
		if(potentialMoves % 8 != 0 && (potentialMoves + 1) % 8 != 0){
			while(potentialMoves >= 0){
				potentialMoves = potentialMoves - 15;
				if(potentialMoves >= 0){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = -1;
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = -1;
					}
					else{
						potentialMoves = -1;
					}
				}
			}
		}	
		potentialMoves = potentialMovesHolder;
		if(potentialMoves % 8 != 0 && (potentialMoves - 1) % 8 != 0){
			while(potentialMoves >= 0){
				potentialMoves = potentialMoves - 10;
				if(potentialMoves >= 0){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = -1;
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = -1;
					}
					else{
						potentialMoves = -1;
					}
				}
			}
		}	
		potentialMoves = potentialMovesHolder;
		if((potentialMoves + 1) % 8 != 0  && (potentialMoves + 2) % 8 != 0 ){
			while(potentialMoves >= 0){
				potentialMoves = potentialMoves - 6;
				if(potentialMoves >= 0){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = -1;
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = -1;
					}
					else{
						potentialMoves = -1;
					}
				}
			}
		}
		potentialMoves = potentialMovesHolder;
		if(potentialMoves % 8 != 0 && (potentialMoves - 1) % 8 != 0){
			while(potentialMoves <= 63){
				potentialMoves = potentialMoves + 6;
				if(potentialMoves <= 63){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = 64;
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = 64;
					}
					else{
						potentialMoves = 64;
					}
				}
			}
		}	
		potentialMoves = potentialMovesHolder;
		if((potentialMoves + 1) % 8 != 0 && (potentialMoves + 2) % 8 != 0){
			while(potentialMoves <= 63){
				potentialMoves = potentialMoves + 10;
				if(potentialMoves <= 63){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = 64;
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = 64;
					}
					else{
						potentialMoves = 64;
					}
				}
			}
		}
		potentialMoves = potentialMovesHolder;
		if(potentialMoves % 8 != 0){
			while(potentialMoves <= 63){
				potentialMoves = potentialMoves + 15;
				if(potentialMoves <= 63){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = 64;
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = 64;
					}
					else{
						potentialMoves = 64;
					}
				}
			}
		}	
		potentialMoves = potentialMovesHolder;
		if((potentialMoves + 1) % 8 != 0){
			while(potentialMoves <= 63){
				potentialMoves = potentialMoves + 17;
				if(potentialMoves <= 63){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = 64;
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = 64;
					}
					else{
						potentialMoves = 64;
					}
				}
			}
		}
		for(val in movesArray){
			document.getElementById(movesArray[val]).style.backgroundColor = "blue";
		}
	}
	if (pieceType == "whiteKnight" && check == true){
		let potentialEnemyMoves = parseInt(tilePosition);	
		let potentialEnemyMovesHolder = potentialEnemyMoves;
		if(potentialEnemyMoves % 8 != 0){
			while(potentialEnemyMoves >= 0){
				potentialEnemyMoves = potentialEnemyMoves - 17;
				if(potentialEnemyMoves >= 0){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else{
						potentialEnemyMoves = -1;
					}
				}
			}
		}	
		potentialEnemyMoves = potentialEnemyMovesHolder;
		if(potentialEnemyMoves % 8 != 0 && (potentialEnemyMoves + 1) % 8 != 0){
			while(potentialEnemyMoves >= 0){
				potentialEnemyMoves = potentialEnemyMoves - 15;
				if(potentialEnemyMoves >= 0){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else{
						potentialEnemyMoves = -1;
					}
				}
			}
		}	
		potentialEnemyMoves = potentialEnemyMovesHolder;
		if(potentialEnemyMoves % 8 != 0 && (potentialEnemyMoves - 1) % 8 != 0){
			while(potentialEnemyMoves >= 0){
				potentialEnemyMoves = potentialEnemyMoves - 10;
				if(potentialEnemyMoves >= 0){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else{
						potentialEnemyMoves = -1;
					}
				}
			}
		}	
		potentialEnemyMoves = potentialEnemyMovesHolder;
		if((potentialEnemyMoves + 1) % 8 != 0  && (potentialEnemyMoves + 2) % 8 != 0 ){
			while(potentialEnemyMoves >= 0){
				potentialEnemyMoves = potentialEnemyMoves - 6;
				if(potentialEnemyMoves >= 0){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else{
						potentialEnemyMoves = -1;
					}
				}
			}
		}
		potentialEnemyMoves = potentialEnemyMovesHolder;
		if(potentialEnemyMoves % 8 != 0 && (potentialEnemyMoves - 1) % 8 != 0){
			while(potentialEnemyMoves <= 63){
				potentialEnemyMoves = potentialEnemyMoves + 6;
				if(potentialEnemyMoves <= 63){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else{
						potentialEnemyMoves = 64;
					}
				}
			}
		}	
		potentialEnemyMoves = potentialEnemyMovesHolder;
		if((potentialEnemyMoves + 1) % 8 != 0 && (potentialEnemyMoves + 2) % 8 != 0){
			while(potentialEnemyMoves <= 63){
				potentialEnemyMoves = potentialEnemyMoves + 10;
				if(potentialEnemyMoves <= 63){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else{
						potentialEnemyMoves = 64;
					}
				}
			}
		}
		potentialEnemyMoves = potentialEnemyMovesHolder;
		if(potentialEnemyMoves % 8 != 0){
			while(potentialEnemyMoves <= 63){
				potentialEnemyMoves = potentialEnemyMoves + 15;
				if(potentialEnemyMoves <= 63){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else{
						potentialEnemyMoves = 64;
					}
				}
			}
		}	
		potentialEnemyMoves = potentialEnemyMovesHolder;
		if((potentialEnemyMoves + 1) % 8 != 0){
			while(potentialEnemyMoves <= 63){
				potentialEnemyMoves = potentialEnemyMoves + 17;
				if(potentialEnemyMoves <= 63){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else{
						potentialEnemyMoves = 64;
					}
				}
			}
		}
	}
	if (pieceType == "blackBishop" && check == false){
		let movesArray = new Array();
		let potentialMoves = parseInt(tilePosition);	
		let potentialMovesHolder = potentialMoves;
		if(potentialMoves % 8 != 0){
			while(potentialMoves >= 0){
				potentialMoves = potentialMoves - 9;
				if(potentialMoves >= 0){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						if ((potentialMoves) % 8 == 0){
							potentialMoves = -1;
						}
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = -1;
					}
					else{
						potentialMoves = -1;
					}
				}
			}
		}
		potentialMoves = potentialMovesHolder;
		if((potentialMoves + 1) % 8 != 0){
			while(potentialMoves >= 0){
				potentialMoves = potentialMoves - 7;
				if(potentialMoves >= 0){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						if ((potentialMoves + 1) % 8 == 0){
							potentialMoves = -1;
						}
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = -1;
					}
					else{
						potentialMoves = -1;
					}
				}
			}
		}
		potentialMoves = potentialMovesHolder;
		if(potentialMoves % 8 != 0){
			while(potentialMoves <= 63){
				potentialMoves = potentialMoves + 7;
				if(potentialMoves <= 63){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						if ((potentialMoves ) % 8 == 0){
							potentialMoves = 64;
						}
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = 64;
					}
					else{
						potentialMoves = 64;
					}
				}
			}
		}	
		potentialMoves = potentialMovesHolder;
		if((potentialMoves + 1) % 8 != 0){
			while(potentialMoves <= 63){
				potentialMoves = potentialMoves + 9;
				if(potentialMoves <= 63){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						if ((potentialMoves + 1) % 8 == 0){
							potentialMoves = 64;
						}
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = 64;
					}
					else{
						potentialMoves = 64;
					}
				}
			}
		}
		for(val in movesArray){
			document.getElementById(movesArray[val]).style.backgroundColor = "blue";
		}
	}
	if (pieceType == "blackBishop" && check == true){
		let potentialEnemyMoves = parseInt(tilePosition);	
		let potentialEnemyMovesHolder = potentialEnemyMoves;
		if(potentialEnemyMoves % 8 != 0){
			while(potentialEnemyMoves >= 0){
				potentialEnemyMoves = potentialEnemyMoves - 9;
				if(potentialEnemyMoves >= 0){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						if ((potentialEnemyMoves) % 8 == 0){
							potentialEnemyMoves = -1;
						}
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else{
						potentialEnemyMoves = -1;
					}
				}
			}
		}
		potentialEnemyMoves = potentialEnemyMovesHolder;
		if((potentialEnemyMoves + 1) % 8 != 0){
			while(potentialEnemyMoves >= 0){
				potentialEnemyMoves = potentialEnemyMoves - 7;
				if(potentialEnemyMoves >= 0){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						if ((potentialEnemyMoves + 1) % 8 == 0){
							potentialEnemyMoves = -1;
						}
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else{
						potentialEnemyMoves = -1;
					}
				}
			}
		}
		potentialEnemyMoves = potentialEnemyMovesHolder;
		if(potentialEnemyMoves % 8 != 0){
			while(potentialEnemyMoves <= 63){
				potentialEnemyMoves = potentialEnemyMoves + 7;
				if(potentialEnemyMoves <= 63){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						if ((potentialEnemyMoves ) % 8 == 0){
							potentialEnemyMoves = 64;
						}
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else{
						potentialEnemyMoves = 64;
					}
				}
			}
		}	
		potentialEnemyMoves = potentialEnemyMovesHolder;
		if((potentialEnemyMoves + 1) % 8 != 0){
			while(potentialEnemyMoves <= 63){
				potentialEnemyMoves = potentialEnemyMoves + 9;
				if(potentialEnemyMoves <= 63){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						if ((potentialEnemyMoves + 1) % 8 == 0){
							potentialEnemyMoves = 64;
						}
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else{
						potentialEnemyMoves = 64;
					}
				}
			}
		}
	}	
	if (pieceType == "whiteBishop" && check == false){
		let movesArray = new Array();
		let potentialMoves = parseInt(tilePosition);	
		let potentialMovesHolder = potentialMoves;
		if(potentialMoves % 8 != 0){
			while(potentialMoves >= 0){
				potentialMoves = potentialMoves - 9;
				if(potentialMoves >= 0){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						if ((potentialMoves) % 8 == 0){
							potentialMoves = -1;
						}
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = -1;
					}
					else{
						potentialMoves = -1;
					}
				}
			}
		}
		potentialMoves = potentialMovesHolder;
		if((potentialMoves + 1) % 8 != 0){
			while(potentialMoves >= 0){
				potentialMoves = potentialMoves - 7;
				if(potentialMoves >= 0){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						if ((potentialMoves + 1) % 8 == 0){
							potentialMoves = -1;
						}
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = -1;
					}
					else{
						potentialMoves = -1;
					}
				}
			}
		}
		potentialMoves = potentialMovesHolder;
		if(potentialMoves % 8 != 0){
			while(potentialMoves <= 63){
				potentialMoves = potentialMoves + 7;
				if(potentialMoves <= 63){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						if ((potentialMoves ) % 8 == 0){
							potentialMoves = 64;
						}
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = 64;
					}
					else{
						potentialMoves = 64;
					}
				}
			}
		}	
		potentialMoves = potentialMovesHolder;
		if((potentialMoves + 1) % 8 != 0){
			while(potentialMoves <= 63){
				potentialMoves = potentialMoves + 9;
				if(potentialMoves <= 63){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						if ((potentialMoves + 1) % 8 == 0){
							potentialMoves = 64;
						}
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = 64;
					}
					else{
						potentialMoves = 64;
					}
				}
			}
		}
		for(val in movesArray){
			document.getElementById(movesArray[val]).style.backgroundColor = "blue";
		}
	}
	if (pieceType == "whiteBishop" && check == true){
		let potentialEnemyMoves = parseInt(tilePosition);	
		let potentialEnemyMovesHolder = potentialEnemyMoves;
		if(potentialEnemyMoves % 8 != 0){
			while(potentialEnemyMoves >= 0){
				potentialEnemyMoves = potentialEnemyMoves - 9;
				if(potentialEnemyMoves >= 0){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						if ((potentialEnemyMoves) % 8 == 0){
							potentialEnemyMoves = -1;
						}
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else{
						potentialEnemyMoves = -1;
					}
				}
			}
		}
		potentialEnemyMoves = potentialEnemyMovesHolder;
		if((potentialEnemyMoves + 1) % 8 != 0){
			while(potentialEnemyMoves >= 0){
				potentialEnemyMoves = potentialEnemyMoves - 7;
				if(potentialEnemyMoves >= 0){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						if ((potentialEnemyMoves + 1) % 8 == 0){
							potentialEnemyMoves = -1;
						}
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else{
						potentialEnemyMoves = -1;
					}
				}
			}
		}
		potentialEnemyMoves = potentialEnemyMovesHolder;
		if(potentialEnemyMoves % 8 != 0){
			while(potentialEnemyMoves <= 63){
				potentialEnemyMoves = potentialEnemyMoves + 7;
				if(potentialEnemyMoves <= 63){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						if ((potentialEnemyMoves ) % 8 == 0){
							potentialEnemyMoves = 64;
						}
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else{
						potentialEnemyMoves = 64;
					}
				}
			}
		}	
		potentialEnemyMoves = potentialEnemyMovesHolder;
		if((potentialEnemyMoves + 1) % 8 != 0){
			while(potentialEnemyMoves <= 63){
				potentialEnemyMoves = potentialEnemyMoves + 9;
				if(potentialEnemyMoves <= 63){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						if ((potentialEnemyMoves + 1) % 8 == 0){
							potentialEnemyMoves = 64;
						}
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else{
						potentialEnemyMoves = 64;
					}
				}
			}
		}
	}	
	if (pieceType == "blackKing" && check == false){
		let movesArray = new Array();
		let potentialMoves = parseInt(tilePosition);	
		let potentialMovesHolder = potentialMoves;
		let inCheck = false;
		if(potentialMoves % 8 != 0){
			inCheck = false;
			while(potentialMoves >= 0){
				potentialMoves = potentialMoves - 9;
				if(potentialMoves >= 0){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						if((document.getElementById("blackKing").parentElement.style.backgroundColor == "red")){
							inCheck = true;
						}
						resetBoardColors();
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if(inCheck == true){
							document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
						}
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
							selectedTile.style.backgroundColor = "green";
						}
						potentialMoves = -1;
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						if((document.getElementById("blackKing").parentElement.style.backgroundColor == "red")){
							inCheck = true;
						}
						resetBoardColors();
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if(inCheck == true){
							document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
						}
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
							selectedTile.style.backgroundColor = "green";
						}
						potentialMoves = -1;
					}
					else{
						potentialMoves = -1;
					}
				}
			}
		}
		potentialMoves = potentialMovesHolder;
			inCheck = false;
			while(potentialMoves >= 0){
				potentialMoves = potentialMoves - 8;
				if(potentialMoves >= 0){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						if((document.getElementById("blackKing").parentElement.style.backgroundColor == "red")){
							inCheck = true;
						}
						resetBoardColors();
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if(inCheck == true){
							document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
						}
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
							selectedTile.style.backgroundColor = "green";
						}
						potentialMoves = -1;
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						if((document.getElementById("blackKing").parentElement.style.backgroundColor == "red")){
							inCheck = true;
						}
						resetBoardColors();
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if(inCheck == true){
							document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
						}
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
							selectedTile.style.backgroundColor = "green";
						}
						potentialMoves = -1;
					}
					else{
						potentialMoves = -1;
					}
				}
			}
			potentialMoves = potentialMovesHolder;
			inCheck = false;
			if((potentialMoves + 1) % 8 != 0){
				while(potentialMoves >= 0){
					potentialMoves = potentialMoves - 7;
					if(potentialMoves >= 0){
						if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							if((document.getElementById("blackKing").parentElement.style.backgroundColor == "red")){
								inCheck = true;
							}
							resetBoardColors();
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if(inCheck == true){
								document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
							}
							if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
								selectedTile.style.backgroundColor = "green";
							}
							potentialMoves = -1;
						}
						else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
							takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						if((document.getElementById("blackKing").parentElement.style.backgroundColor == "red")){
							inCheck = true;
						}
						resetBoardColors();
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if(inCheck == true){
							document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
						}
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
							selectedTile.style.backgroundColor = "green";
						}
							potentialMoves = -1;
						}
						else{
							potentialMoves = -1;
						}
					}
				}
			}
			potentialMoves = potentialMovesHolder;
			inCheck = false;
			if(potentialMoves % 8 != 0){
				while(potentialMoves >= 0){
					potentialMoves = potentialMoves - 1;
					if(potentialMoves >= 0){
						if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							if((document.getElementById("blackKing").parentElement.style.backgroundColor == "red")){
								inCheck = true;
							}
							resetBoardColors();
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if(inCheck == true){
								document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
							}
							if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
								selectedTile.style.backgroundColor = "green";
							}
							potentialMoves = -1;
						}
						else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
							takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
							document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							if((document.getElementById("blackKing").parentElement.style.backgroundColor == "red")){
								inCheck = true;
							}
							resetBoardColors();
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if(inCheck == true){
								document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
							}
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
							if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
								selectedTile.style.backgroundColor = "green";
							}
							potentialMoves = -1;
						}
						else{
							potentialMoves = -1;
						}
					}
				}
			}
			potentialMoves = potentialMovesHolder;
			inCheck = false;
			if((potentialMoves + 1) % 8 != 0){
				while(potentialMoves <= 63){
					potentialMoves = potentialMoves + 1;
					if(potentialMoves <= 63){
						if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							if((document.getElementById("blackKing").parentElement.style.backgroundColor == "red")){
								inCheck = true;
							}
							resetBoardColors();
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if(inCheck == true){
								document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
							}
							if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
								selectedTile.style.backgroundColor = "green";
							}
							potentialMoves = 64;
						}
						else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
							takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
							document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							if((document.getElementById("blackKing").parentElement.style.backgroundColor == "red")){
								inCheck = true;
							}
							resetBoardColors();
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if(inCheck == true){
								document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
							}
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
							if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
								selectedTile.style.backgroundColor = "green";
							}
							potentialMoves = 64;
						}
						else{
							potentialMoves = 64;
						}
					}
				}
			}
			potentialMoves = potentialMovesHolder;
			inCheck = false;
			if(potentialMoves % 8 != 0){
				while(potentialMoves <= 63){
					potentialMoves = potentialMoves + 7;
					if(potentialMoves <= 63){
						if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							if((document.getElementById("blackKing").parentElement.style.backgroundColor == "red")){
								inCheck = true;
							}
							resetBoardColors();
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if(inCheck == true){
								document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
							}
							if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
								selectedTile.style.backgroundColor = "green";
							}
							potentialMoves = 64;
						}
						else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
							takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
							document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							if((document.getElementById("blackKing").parentElement.style.backgroundColor == "red")){
								inCheck = true;
							}
							resetBoardColors();
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if(inCheck == true){
								document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
							}
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
							if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
								selectedTile.style.backgroundColor = "green";
							}
							potentialMoves = 64;
						}
						else{
							potentialMoves = 64;
						}
					}
				}
			}
			potentialMoves = potentialMovesHolder;
			inCheck = false;
			while(potentialMoves <= 63){
				potentialMoves = potentialMoves + 8;
				if(potentialMoves <= 63){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						if((document.getElementById("blackKing").parentElement.style.backgroundColor == "red")){
							inCheck = true;
						}
						resetBoardColors();
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if(inCheck == true){
							document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
						}
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
							selectedTile.style.backgroundColor = "green";
						}
						potentialMoves = 64;
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						if((document.getElementById("blackKing").parentElement.style.backgroundColor == "red")){
							inCheck = true;
						}
						resetBoardColors();
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if(inCheck == true){
							document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
						}
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
							selectedTile.style.backgroundColor = "green";
						}
						potentialMoves = 64;
					}
					else{
						potentialMoves = 64;
					}
				}
			}
			potentialMoves = potentialMovesHolder;
			inCheck = false;
			if((potentialMoves + 1) % 8 != 0){
				while(potentialMoves <= 63){
					potentialMoves = potentialMoves + 9;
					if(potentialMoves <= 63){
						if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							if((document.getElementById("blackKing").parentElement.style.backgroundColor == "red")){
								inCheck = true;
							}
							resetBoardColors();
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if(inCheck == true){
								document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
							}
							if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
								selectedTile.style.backgroundColor = "green";
							}
							potentialMoves = 64;
						}
						else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
							takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
							document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							if((document.getElementById("blackKing").parentElement.style.backgroundColor == "red")){
								inCheck = true;
							}
							resetBoardColors();
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if(inCheck == true){
								document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
							}
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
							if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
								selectedTile.style.backgroundColor = "green";
							}
							potentialMoves = 64;
						}
						else{
							potentialMoves = 64;
						}
					}
				}
				
				if(blackKingMoved == false && blackRook1Moved == false &&
					 document.getElementById("blackKing").parentElement.style.backgroundColor != "red"){
					if (document.getElementById("c8").hasChildNodes() == false &&
					document.getElementById("d8").hasChildNodes() == false){
						let canCastleSpace1 = false;
						let canCastleSpace2 = false;
						document.getElementById("c8").appendChild(blackKing);
						checkForCheck()
						if(document.getElementById("blackKing").parentElement.style.backgroundColor != "red"){
							canCastleSpace1 = true;
						}
						resetBoardColors()
						document.getElementById("d8").appendChild(blackKing);
						checkForCheck()
						if(document.getElementById("blackKing").parentElement.style.backgroundColor != "red"){
							canCastleSpace2 = true;
						}
						resetBoardColors()
						document.getElementById("e8").appendChild(blackKing);
						if(canCastleSpace1 == true && canCastleSpace2 == true){
							movesArray.push("c8");
						}
						selectedTile.style.backgroundColor = "green";
					}
				}
				if(blackKingMoved == false && blackRook2Moved == false && 
					document.getElementById("blackKing").parentElement.style.backgroundColor != "red"){
				   if (document.getElementById("f8").hasChildNodes() == false &&
				   document.getElementById("g8").hasChildNodes() == false){
					   let canCastleSpace1 = false;
					   let canCastleSpace2 = false;
					   document.getElementById("f8").appendChild(blackKing);
					   checkForCheck()
					   if(document.getElementById("blackKing").parentElement.style.backgroundColor != "red"){
						   canCastleSpace1 = true;
					   }
					   resetBoardColors()
					   document.getElementById("g8").appendChild(blackKing);
					   checkForCheck()
					   if(document.getElementById("blackKing").parentElement.style.backgroundColor != "red"){
						   canCastleSpace2 = true;
					   }
					   resetBoardColors()
					   document.getElementById("e8").appendChild(blackKing);
					   if(canCastleSpace1 == true && canCastleSpace2 == true){
						   movesArray.push("g8");
					   }
					   selectedTile.style.backgroundColor = "green";
				   }
				} 	
			}
		for(val in movesArray){
			document.getElementById(movesArray[val]).style.backgroundColor = "blue";
		}	
	} 
	if (pieceType == "blackKing" && check == true){
		let potentialEnemyMoves = parseInt(tilePosition);	
		let potentialEnemyMovesHolder = potentialEnemyMoves;
		if(potentialEnemyMoves % 8 != 0){
			while(potentialEnemyMoves >= 0){
				potentialEnemyMoves = potentialEnemyMoves - 9;
				if(potentialEnemyMoves >= 0){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else{
						potentialEnemyMoves = -1;
					}
				}
			}
		}
		potentialEnemyMoves = potentialEnemyMovesHolder;
			while(potentialEnemyMoves >= 0){
				potentialEnemyMoves = potentialEnemyMoves - 8;
				if(potentialEnemyMoves >= 0){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else{
						potentialEnemyMoves = -1;
					}
				}
			}
			potentialEnemyMoves = potentialEnemyMovesHolder;
			if((potentialEnemyMoves + 1) % 8 != 0){
				while(potentialEnemyMoves >= 0){
					potentialEnemyMoves = potentialEnemyMoves - 7;
					if(potentialEnemyMoves >= 0){
						if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = -1;
						}
						else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = -1;
						}
						else{
							potentialEnemyMoves = -1;
						}
					}
				}
			}
			potentialEnemyMoves = potentialEnemyMovesHolder;
			if(potentialEnemyMoves % 8 != 0){
				while(potentialEnemyMoves >= 0){
					potentialEnemyMoves = potentialEnemyMoves - 1;
					if(potentialEnemyMoves >= 0){
						if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = -1;
						}
						else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = -1;
						}
						else{
							potentialEnemyMoves = -1;
						}
					}
				}
			}
			potentialEnemyMoves = potentialEnemyMovesHolder;
			if((potentialEnemyMoves + 1) % 8 != 0){
				while(potentialEnemyMoves <= 63){
					potentialEnemyMoves = potentialEnemyMoves + 1;
					if(potentialEnemyMoves <= 63){
						if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = 64;
						}
						else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = 64;
						}
						else{
							potentialEnemyMoves = 64;
						}
					}
				}
			}
			potentialEnemyMoves = potentialEnemyMovesHolder;
			if(potentialEnemyMoves % 8 != 0){
				while(potentialEnemyMoves <= 63){
					potentialEnemyMoves = potentialEnemyMoves + 7;
					if(potentialEnemyMoves <= 63){
						if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = 64;
						}
						else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = 64;
						}
						else{
							potentialEnemyMoves = 64;
						}
					}
				}
			}
			potentialEnemyMoves = potentialEnemyMovesHolder;
			
			while(potentialEnemyMoves <= 63){
				potentialEnemyMoves = potentialEnemyMoves + 8;
				if(potentialEnemyMoves <= 63){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else{
						potentialEnemyMoves = 64;
					}
				}
			}
			potentialEnemyMoves = potentialEnemyMovesHolder;
			if((potentialEnemyMoves + 1) % 8 != 0){
				while(potentialEnemyMoves <= 63){
					potentialEnemyMoves = potentialEnemyMoves + 9;
					if(potentialEnemyMoves <= 63){
						if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = 64;
						}
						else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = 64;
						}
						else{
							potentialEnemyMoves = 64;
						}
					}
				}
			}
	}
	if (pieceType == "whiteKing" && check == false){
		let movesArray = new Array();
		let potentialMoves = parseInt(tilePosition);	
		let potentialMovesHolder = potentialMoves;
		let inCheck = false;
		if(potentialMoves % 8 != 0){
			inCheck = false;
			while(potentialMoves >= 0){
				potentialMoves = potentialMoves - 9;
				if(potentialMoves >= 0){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor == "red")){
							inCheck = true;
						}
						resetBoardColors();
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if(inCheck == true){
							document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
						}
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
							selectedTile.style.backgroundColor = "green";
						}
						potentialMoves = -1;
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor == "red")){
							inCheck = true;
						}
						resetBoardColors();
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if(inCheck == true){
							document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
						}
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
							selectedTile.style.backgroundColor = "green";
						}
						potentialMoves = -1;
					}
					else{
						potentialMoves = -1;
					}
				}
			}
		}
		potentialMoves = potentialMovesHolder;
		inCheck = false;
			while(potentialMoves >= 0){
				potentialMoves = potentialMoves - 8;
				if(potentialMoves >= 0){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor == "red")){
							inCheck = true;
						}
						resetBoardColors();
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if(inCheck == true){
							document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
						}
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
							selectedTile.style.backgroundColor = "green";
						}
						potentialMoves = -1;
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor == "red")){
							inCheck = true;
						}
						resetBoardColors();
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if(inCheck == true){
							document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
						}
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
							selectedTile.style.backgroundColor = "green";
						}
						potentialMoves = -1;
					}
					else{
						potentialMoves = -1;
					}
				}
			}
			potentialMoves = potentialMovesHolder;
			inCheck = false;
			if((potentialMoves + 1) % 8 != 0){
				while(potentialMoves >= 0){
					potentialMoves = potentialMoves - 7;
					if(potentialMoves >= 0){
						if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor == "red")){
								inCheck = true;
							}
							resetBoardColors();
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if(inCheck == true){
								document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
							}
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
								selectedTile.style.backgroundColor = "green";
							}
							potentialMoves = -1;
						}
						else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
							takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
							document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor == "red")){
								inCheck = true;
							}
							resetBoardColors();
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if(inCheck == true){
								document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
							}
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
								selectedTile.style.backgroundColor = "green";
							}
							potentialMoves = -1;
						}
						else{
							potentialMoves = -1;
						}
					}
				}
			}
			potentialMoves = potentialMovesHolder;
			inCheck = false;
			if(potentialMoves % 8 != 0){
				while(potentialMoves >= 0){
					potentialMoves = potentialMoves - 1;
					if(potentialMoves >= 0){
						if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor == "red")){
								inCheck = true;
							}
							resetBoardColors();
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if(inCheck == true){
								document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
							}
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
								selectedTile.style.backgroundColor = "green";
							}
							potentialMoves = -1;
						}
						else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
							takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
							document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor == "red")){
								inCheck = true;
							}
							resetBoardColors();
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if(inCheck == true){
								document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
							}
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
								selectedTile.style.backgroundColor = "green";
							}
							potentialMoves = -1;
						}
						else{
							potentialMoves = -1;
						}
					}
				}
			}
			potentialMoves = potentialMovesHolder;
			inCheck = false;
			if((potentialMoves + 1) % 8 != 0){
				while(potentialMoves <= 63){
					potentialMoves = potentialMoves + 1;
					if(potentialMoves <= 63){
						if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor == "red")){
								inCheck = true;
							}
							resetBoardColors();
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if(inCheck == true){
								document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
							}
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
								selectedTile.style.backgroundColor = "green";
							}
							potentialMoves = 64;
						}
						else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
							takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
							document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor == "red")){
								inCheck = true;
							}
							resetBoardColors();
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if(inCheck == true){
								document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
							}
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
								selectedTile.style.backgroundColor = "green";
							}
							potentialMoves = 64;
						}
						else{
							potentialMoves = 64;
						}
					}
				}
			}
			potentialMoves = potentialMovesHolder;
			inCheck = false;
			if(potentialMoves % 8 != 0){
				while(potentialMoves <= 63){
					potentialMoves = potentialMoves + 7;
					if(potentialMoves <= 63){
						if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor == "red")){
								inCheck = true;
							}
							resetBoardColors();
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if(inCheck == true){
								document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
							}
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
								selectedTile.style.backgroundColor = "green";
							}
							potentialMoves = 64;
						}
						else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
							takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
							document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor == "red")){
								inCheck = true;
							}
							resetBoardColors();
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if(inCheck == true){
								document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
							}
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
								selectedTile.style.backgroundColor = "green";
							}
							potentialMoves = 64;
						}
						else{
							potentialMoves = 64;
						}
					}
				}
			}
			potentialMoves = potentialMovesHolder;
			inCheck = false;
			while(potentialMoves <= 63){
				potentialMoves = potentialMoves + 8;
				if(potentialMoves <= 63){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor == "red")){
							inCheck = true;
						}
						resetBoardColors();
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if(inCheck == true){
							document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
						}
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
							selectedTile.style.backgroundColor = "green";
						}
						potentialMoves = 64;
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor == "red")){
							inCheck = true;
						}
						resetBoardColors();
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if(inCheck == true){
							document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
						}
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
							selectedTile.style.backgroundColor = "green";
						}
						potentialMoves = 64;
					}
					else{
						potentialMoves = 64;
					}
				}
			}
			potentialMoves = potentialMovesHolder;
			inCheck = false;
			if((potentialMoves + 1) % 8 != 0){
				while(potentialMoves <= 63){
					potentialMoves = potentialMoves + 9;
					if(potentialMoves <= 63){
						if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor == "red")){
								inCheck = true;
							}
							resetBoardColors();
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if(inCheck == true){
								document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
							}
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
								selectedTile.style.backgroundColor = "green";
							}
							potentialMoves = 64;
						}
						else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
							takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
							document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor == "red")){
								inCheck = true;
							}
							resetBoardColors();
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if(inCheck == true){
								document.getElementById(boardTileArray[potentialMovesHolder]).style.backgroundColor = "red";
							}
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
								selectedTile.style.backgroundColor = "green";
							}
							potentialMoves = 64;
						}
						else{
							potentialMoves = 64;
						}
					}
				}
			}
			if(whiteKingMoved == false && whiteRook1Moved == false &&
				document.getElementById("whiteKing").parentElement.style.backgroundColor != "red"){
			   if (document.getElementById("c1").hasChildNodes() == false &&
			   document.getElementById("d1").hasChildNodes() == false){
				   let canCastleSpace1 = false;
				   let canCastleSpace2 = false;
				   document.getElementById("c1").appendChild(whiteKing);
				   checkForCheck()
				   if(document.getElementById("whiteKing").parentElement.style.backgroundColor != "red"){
					   canCastleSpace1 = true;
				   }
				   resetBoardColors()
				   document.getElementById("d1").appendChild(whiteKing);
				   checkForCheck()
				   if(document.getElementById("whiteKing").parentElement.style.backgroundColor != "red"){
					   canCastleSpace2 = true;
				   }
				   resetBoardColors()
				   document.getElementById("e1").appendChild(whiteKing);
				   if(canCastleSpace1 == true && canCastleSpace2 == true){
					   movesArray.push("c1");
				   }
				   selectedTile.style.backgroundColor = "green";
			   }
		   }
		   if(whiteKingMoved == false && whiteRook2Moved == false && 
			   document.getElementById("whiteKing").parentElement.style.backgroundColor != "red"){
			  if (document.getElementById("f1").hasChildNodes() == false &&
			  document.getElementById("g1").hasChildNodes() == false){
				  let canCastleSpace1 = false;
				  let canCastleSpace2 = false;
				  document.getElementById("f1").appendChild(whiteKing);
				  checkForCheck()
				  if(document.getElementById("whiteKing").parentElement.style.backgroundColor != "red"){
					  canCastleSpace1 = true;
				  }
				  resetBoardColors()
				  document.getElementById("g1").appendChild(whiteKing);
				  checkForCheck()
				  if(document.getElementById("whiteKing").parentElement.style.backgroundColor != "red"){
					  canCastleSpace2 = true;
				  }
				  resetBoardColors()
				  document.getElementById("e1").appendChild(whiteKing);
				  if(canCastleSpace1 == true && canCastleSpace2 == true){
					  movesArray.push("g1");
				  }
				  selectedTile.style.backgroundColor = "green";
			  }
		   }
		for(val in movesArray){
			document.getElementById(movesArray[val]).style.backgroundColor = "blue";
		}	
	}
	if (pieceType == "whiteKing" && check == true){
		let potentialEnemyMoves = parseInt(tilePosition);	
		let potentialEnemyMovesHolder = potentialEnemyMoves;
		if(potentialEnemyMoves % 8 != 0){
			while(potentialEnemyMoves >= 0){
				potentialEnemyMoves = potentialEnemyMoves - 9;
				if(potentialEnemyMoves >= 0){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else{
						potentialEnemyMoves = -1;
					}
				}
			}
		}
		potentialEnemyMoves = potentialEnemyMovesHolder;
			while(potentialEnemyMoves >= 0){
				potentialEnemyMoves = potentialEnemyMoves - 8;
				if(potentialEnemyMoves >= 0){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else{
						potentialEnemyMoves = -1;
					}
				}
			}
			potentialEnemyMoves = potentialEnemyMovesHolder;
			if((potentialEnemyMoves + 1) % 8 != 0){
				while(potentialEnemyMoves >= 0){
					potentialEnemyMoves = potentialEnemyMoves - 7;
					if(potentialEnemyMoves >= 0){
						if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = -1;
						}
						else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = -1;
						}
						else{
							potentialEnemyMoves = -1;
						}
					}
				}
			}
			potentialEnemyMoves = potentialEnemyMovesHolder;
			if(potentialEnemyMoves % 8 != 0){
				while(potentialEnemyMoves >= 0){
					potentialEnemyMoves = potentialEnemyMoves - 1;
					if(potentialEnemyMoves >= 0){
						if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = -1;
						}
						else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = -1;
						}
						else{
							potentialEnemyMoves = -1;
						}
					}
				}
			}
			potentialEnemyMoves = potentialEnemyMovesHolder;
			if((potentialEnemyMoves + 1) % 8 != 0){
				while(potentialEnemyMoves <= 63){
					potentialEnemyMoves = potentialEnemyMoves + 1;
					if(potentialEnemyMoves <= 63){
						if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = 64;
						}
						else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = 64;
						}
						else{
							potentialEnemyMoves = 64;
						}
					}
				}
			}
			potentialEnemyMoves = potentialEnemyMovesHolder;
			if(potentialEnemyMoves % 8 != 0){
				while(potentialEnemyMoves <= 63){
					potentialEnemyMoves = potentialEnemyMoves + 7;
					if(potentialEnemyMoves <= 63){
						if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = 64;
						}
						else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = 64;
						}
						else{
							potentialEnemyMoves = 64;
						}
					}
				}
			}
			potentialEnemyMoves = potentialEnemyMovesHolder;
			
			while(potentialEnemyMoves <= 63){
				potentialEnemyMoves = potentialEnemyMoves + 8;
				if(potentialEnemyMoves <= 63){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else{
						potentialEnemyMoves = 64;
					}
				}
			}
			potentialEnemyMoves = potentialEnemyMovesHolder;
			if((potentialEnemyMoves + 1) % 8 != 0){
				while(potentialEnemyMoves <= 63){
					potentialEnemyMoves = potentialEnemyMoves + 9;
					if(potentialEnemyMoves <= 63){
						if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = 64;
						}
						else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = 64;
						}
						else{
							potentialEnemyMoves = 64;
						}
					}
				}
			}
	}
	if (pieceType == "blackQueen" && check == false){
		let movesArray = new Array();
		let potentialMoves = parseInt(tilePosition);	
		let potentialMovesHolder = potentialMoves;
		if(potentialMoves % 8 != 0){
			while(potentialMoves >= 0){
				potentialMoves = potentialMoves - 9;
				if(potentialMoves >= 0){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						if ((potentialMoves) % 8 == 0){
							potentialMoves = -1;
						}
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = -1;
					}
					else{
						potentialMoves = -1;
					}
				}
			}
		}
		potentialMoves = potentialMovesHolder;
			while(potentialMoves >= 0){
				potentialMoves = potentialMoves - 8;
				if(potentialMoves >= 0){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = -1;
					}
					else{
						potentialMoves = -1;
					}
				}
			}
			potentialMoves = potentialMovesHolder;
			if((potentialMoves + 1) % 8 != 0){
				while(potentialMoves >= 0){
					potentialMoves = potentialMoves - 7;
					if(potentialMoves >= 0){
						if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							selectedTile.style.backgroundColor = "green";
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
							}
							if ((potentialMoves + 1) % 8 == 0){
								potentialMoves = -1;
							}
						}
						else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
							takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
							document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							selectedTile.style.backgroundColor = "green";
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
							if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
							}
							potentialMoves = -1;
						}
						else{
							potentialMoves = -1;
						}
					}
				}
			}
			potentialMoves = potentialMovesHolder;
			if(potentialMoves % 8 != 0){
				while(potentialMoves >= 0){
					potentialMoves = potentialMoves - 1;
					if(potentialMoves >= 0){
						if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							selectedTile.style.backgroundColor = "green";
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
							}
							if ((potentialMoves) % 8 == 0){
								potentialMoves = -1;
							}
						}
						else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
							takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
							document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							selectedTile.style.backgroundColor = "green";
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
							if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
							}
							potentialMoves = -1;
						}
						else{
							potentialMoves = -1;
						}
					}
				}
			}
			potentialMoves = potentialMovesHolder;
			if((potentialMoves + 1) % 8 != 0){
				while(potentialMoves <= 63){
					potentialMoves = potentialMoves + 1;
					if(potentialMoves <= 63){
						if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							selectedTile.style.backgroundColor = "green";
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
							}
							if ((potentialMoves + 1) % 8 == 0){
								potentialMoves = 64;
							}
						}
						else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
							takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
							document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							selectedTile.style.backgroundColor = "green";
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
							if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
							}
							potentialMoves = 64;
						}
						else{
							potentialMoves = 64;
						}
					}
				}
			}
			potentialMoves = potentialMovesHolder;
			if(potentialMoves % 8 != 0){
				while(potentialMoves <= 63){
					potentialMoves = potentialMoves + 7;
					if(potentialMoves <= 63){
						if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							selectedTile.style.backgroundColor = "green";
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
							}
							if (potentialMoves % 8 == 0){
								potentialMoves = 64;
							}
						}
						else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
							takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
							document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							selectedTile.style.backgroundColor = "green";
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
							if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
							}
							potentialMoves = 64;
						}
						else{
							potentialMoves = 64;
						}
					}
				}
			}
			potentialMoves = potentialMovesHolder;
			
			while(potentialMoves <= 63){
				potentialMoves = potentialMoves + 8;
				if(potentialMoves <= 63){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = 64;
					}
					else{
						potentialMoves = 64;
					}
				}
			}
			potentialMoves = potentialMovesHolder;
			if((potentialMoves + 1) % 8 != 0){
				while(potentialMoves <= 63){
					potentialMoves = potentialMoves + 9;
					if(potentialMoves <= 63){
						if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							selectedTile.style.backgroundColor = "green";
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
							}
							if ((potentialMoves + 1) % 8 == 0){
								potentialMoves = 64;
							}
						}
						else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "white"){
							takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
							document.getElementById("takenWhite").appendChild(document.getElementById(takenPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							selectedTile.style.backgroundColor = "green";
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
							if((document.getElementById("blackKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
							}
							potentialMoves = 64;
						}
						else{
							potentialMoves = 64;
						}
					}
				}
			}
		for(val in movesArray){
			document.getElementById(movesArray[val]).style.backgroundColor = "blue";
		}
	}
	if (pieceType == "blackQueen" && check == true){
		let potentialEnemyMoves = parseInt(tilePosition);	
		let potentialEnemyMovesHolder = potentialEnemyMoves;
		if(potentialEnemyMoves % 8 != 0){
			while(potentialEnemyMoves >= 0){
				potentialEnemyMoves = potentialEnemyMoves - 9;
				if(potentialEnemyMoves >= 0){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						if ((potentialEnemyMoves) % 8 == 0){
							potentialEnemyMoves = -1;
						}
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else{
						potentialEnemyMoves = -1;
					}
				}
			}
		}
		potentialEnemyMoves = potentialEnemyMovesHolder;
			while(potentialEnemyMoves >= 0){
				potentialEnemyMoves = potentialEnemyMoves - 8;
				if(potentialEnemyMoves >= 0){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else{
						potentialEnemyMoves = -1;
					}
				}
			}
			potentialEnemyMoves = potentialEnemyMovesHolder;
			if((potentialEnemyMoves + 1) % 8 != 0){
				while(potentialEnemyMoves >= 0){
					potentialEnemyMoves = potentialEnemyMoves - 7;
					if(potentialEnemyMoves >= 0){
						if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							if ((potentialEnemyMoves + 1) % 8 == 0){
								potentialEnemyMoves = -1;
							}
						}
						else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = -1;
						}
						else{
							potentialEnemyMoves = -1;
						}
					}
				}
			}
			potentialEnemyMoves = potentialEnemyMovesHolder;
			if(potentialEnemyMoves % 8 != 0){
				while(potentialEnemyMoves >= 0){
					potentialEnemyMoves = potentialEnemyMoves - 1;
					if(potentialEnemyMoves >= 0){
						if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							if ((potentialEnemyMoves) % 8 == 0){
								potentialEnemyMoves = -1;
							}
						}
						else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = -1;
						}
						else{
							potentialEnemyMoves = -1;
						}
					}
				}
			}
			potentialEnemyMoves = potentialEnemyMovesHolder;
			if((potentialEnemyMoves + 1) % 8 != 0){
				while(potentialEnemyMoves <= 63){
					potentialEnemyMoves = potentialEnemyMoves + 1;
					if(potentialEnemyMoves <= 63){
						if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							if ((potentialEnemyMoves + 1) % 8 == 0){
								potentialEnemyMoves = 64;
							}
						}
						else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = 64;
						}
						else{
							potentialEnemyMoves = 64;
						}
					}
				}
			}
			potentialEnemyMoves = potentialEnemyMovesHolder;
			if(potentialEnemyMoves % 8 != 0){
				while(potentialEnemyMoves <= 63){
					potentialEnemyMoves = potentialEnemyMoves + 7;
					if(potentialEnemyMoves <= 63){
						if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							if (potentialEnemyMoves % 8 == 0){
								potentialEnemyMoves = 64;
							}
						}
						else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = 64;
						}
						else{
							potentialEnemyMoves = 64;
						}
					}
				}
			}
			potentialEnemyMoves = potentialEnemyMovesHolder;
			
			while(potentialEnemyMoves <= 63){
				potentialEnemyMoves = potentialEnemyMoves + 8;
				if(potentialEnemyMoves <= 63){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else{
						potentialEnemyMoves = 64;
					}
				}
			}
			potentialEnemyMoves = potentialEnemyMovesHolder;
			if((potentialEnemyMoves + 1) % 8 != 0){
				while(potentialEnemyMoves <= 63){
					potentialEnemyMoves = potentialEnemyMoves + 9;
					if(potentialEnemyMoves <= 63){
						if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							if ((potentialEnemyMoves + 1) % 8 == 0){
								potentialEnemyMoves = 64;
							}
						}
						else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "white"){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = 64;
						}
						else{
							potentialEnemyMoves = 64;
						}
					}
				}
			}
	}
	if (pieceType == "whiteQueen" && check == false){
		let movesArray = new Array();
		let potentialMoves = parseInt(tilePosition);	
		let potentialMovesHolder = potentialMoves;
		if(potentialMoves % 8 != 0){
			while(potentialMoves >= 0){
				potentialMoves = potentialMoves - 9;
				if(potentialMoves >= 0){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						if ((potentialMoves) % 8 == 0){
							potentialMoves = -1;
						}
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = -1;
					}
					else{
						potentialMoves = -1;
					}
				}
			}
		}
		potentialMoves = potentialMovesHolder;
			while(potentialMoves >= 0){
				potentialMoves = potentialMoves - 8;
				if(potentialMoves >= 0){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = -1;
					}
					else{
						potentialMoves = -1;
					}
				}
			}
			potentialMoves = potentialMovesHolder;
			if((potentialMoves + 1) % 8 != 0){
				while(potentialMoves >= 0){
					potentialMoves = potentialMoves - 7;
					if(potentialMoves >= 0){
						if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							selectedTile.style.backgroundColor = "green";
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
							}
							if ((potentialMoves + 1) % 8 == 0){
								potentialMoves = -1;
							}
						}
						else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
							takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
							document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							selectedTile.style.backgroundColor = "green";
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
							}
							potentialMoves = -1;
						}
						else{
							potentialMoves = -1;
						}
					}
				}
			}
			potentialMoves = potentialMovesHolder;
			if(potentialMoves % 8 != 0){
				while(potentialMoves >= 0){
					potentialMoves = potentialMoves - 1;
					if(potentialMoves >= 0){
						if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							selectedTile.style.backgroundColor = "green";
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
							}
							if ((potentialMoves) % 8 == 0){
								potentialMoves = -1;
							}
						}
						else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
							takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
							document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							selectedTile.style.backgroundColor = "green";
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
							}
							potentialMoves = -1;
						}
						else{
							potentialMoves = -1;
						}
					}
				}
			}
			potentialMoves = potentialMovesHolder;
			if((potentialMoves + 1) % 8 != 0){
				while(potentialMoves <= 63){
					potentialMoves = potentialMoves + 1;
					if(potentialMoves <= 63){
						if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							selectedTile.style.backgroundColor = "green";
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
							}
							if ((potentialMoves + 1) % 8 == 0){
								potentialMoves = 64;
							}
						}
						else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
							takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
							document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							selectedTile.style.backgroundColor = "green";
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
							}
							potentialMoves = 64;
						}
						else{
							potentialMoves = 64;
						}
					}
				}
			}
			potentialMoves = potentialMovesHolder;
			if(potentialMoves % 8 != 0){
				while(potentialMoves <= 63){
					potentialMoves = potentialMoves + 7;
					if(potentialMoves <= 63){
						if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							selectedTile.style.backgroundColor = "green";
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
							}
							if (potentialMoves % 8 == 0){
								potentialMoves = 64;
							}
						}
						else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
							takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
							document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							selectedTile.style.backgroundColor = "green";
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
							}
							potentialMoves = 64;
						}
						else{
							potentialMoves = 64;
						}
					}
				}
			}
			potentialMoves = potentialMovesHolder;
			
			while(potentialMoves <= 63){
				potentialMoves = potentialMoves + 8;
				if(potentialMoves <= 63){
					if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
					}
					else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
						takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
						document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
						checkForCheck()
						selectedTile.style.backgroundColor = "green";
						document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
						document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
						if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
							movesArray.push(boardTileArray[potentialMoves]);
						}
						potentialMoves = 64;
					}
					else{
						potentialMoves = 64;
					}
				}
			}
			potentialMoves = potentialMovesHolder;
			if((potentialMoves + 1) % 8 != 0){
				while(potentialMoves <= 63){
					potentialMoves = potentialMoves + 9;
					if(potentialMoves <= 63){
						if(document.getElementById(boardTileArray[potentialMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialMoves]).style.backgroundColor = "blue";
							if ((potentialMoves + 1) % 8 == 0){
								potentialMoves = 64;
							}
						}
						else if(document.getElementById(boardTileArray[potentialMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialMoves]).firstChild.id) == "black"){
							takenPiece = document.getElementById(boardTileArray[potentialMoves]).firstChild.id;
							document.getElementById("takenBlack").appendChild(document.getElementById(takenPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(selectedPiece));
							checkForCheck()
							selectedTile.style.backgroundColor = "green";
							document.getElementById(boardTileArray[potentialMovesHolder]).appendChild(document.getElementById(selectedPiece));
							document.getElementById(boardTileArray[potentialMoves]).appendChild(document.getElementById(takenPiece));
							if((document.getElementById("whiteKing").parentElement.style.backgroundColor != "red")){
								movesArray.push(boardTileArray[potentialMoves]);
							}
							potentialMoves = 64;
						}
						else{
							potentialMoves = 64;
						}
					}
				}
			}
		for(val in movesArray){
			document.getElementById(movesArray[val]).style.backgroundColor = "blue";
		}
	}
	if (pieceType == "whiteQueen" && check == true){
		let potentialEnemyMoves = parseInt(tilePosition);	
		let potentialEnemyMovesHolder = potentialEnemyMoves;
		if(potentialEnemyMoves % 8 != 0){
			while(potentialEnemyMoves >= 0){
				potentialEnemyMoves = potentialEnemyMoves - 9;
				if(potentialEnemyMoves >= 0){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						if ((potentialEnemyMoves) % 8 == 0){
							potentialEnemyMoves = -1;
						}
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else{
						potentialEnemyMoves = -1;
					}
				}
			}
		}
		potentialEnemyMoves = potentialEnemyMovesHolder;
			while(potentialEnemyMoves >= 0){
				potentialEnemyMoves = potentialEnemyMoves - 8;
				if(potentialEnemyMoves >= 0){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = -1;
					}
					else{
						potentialEnemyMoves = -1;
					}
				}
			}
			potentialEnemyMoves = potentialEnemyMovesHolder;
			if((potentialEnemyMoves + 1) % 8 != 0){
				while(potentialEnemyMoves >= 0){
					potentialEnemyMoves = potentialEnemyMoves - 7;
					if(potentialEnemyMoves >= 0){
						if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							if ((potentialEnemyMoves + 1) % 8 == 0){
								potentialEnemyMoves = -1;
							}
						}
						else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = -1;
						}
						else{
							potentialEnemyMoves = -1;
						}
					}
				}
			}
			potentialEnemyMoves = potentialEnemyMovesHolder;
			if(potentialEnemyMoves % 8 != 0){
				while(potentialEnemyMoves >= 0){
					potentialEnemyMoves = potentialEnemyMoves - 1;
					if(potentialEnemyMoves >= 0){
						if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							if ((potentialEnemyMoves) % 8 == 0){
								potentialEnemyMoves = -1;
							}
						}
						else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = -1;
						}
						else{
							potentialEnemyMoves = -1;
						}
					}
				}
			}
			potentialEnemyMoves = potentialEnemyMovesHolder;
			if((potentialEnemyMoves + 1) % 8 != 0){
				while(potentialEnemyMoves <= 63){
					potentialEnemyMoves = potentialEnemyMoves + 1;
					if(potentialEnemyMoves <= 63){
						if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							if ((potentialEnemyMoves + 1) % 8 == 0){
								potentialEnemyMoves = 64;
							}
						}
						else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = 64;
						}
						else{
							potentialEnemyMoves = 64;
						}
					}
				}
			}
			potentialEnemyMoves = potentialEnemyMovesHolder;
			if(potentialEnemyMoves % 8 != 0){
				while(potentialEnemyMoves <= 63){
					potentialEnemyMoves = potentialEnemyMoves + 7;
					if(potentialEnemyMoves <= 63){
						if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							if (potentialEnemyMoves % 8 == 0){
								potentialEnemyMoves = 64;
							}
						}
						else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = 64;
						}
						else{
							potentialEnemyMoves = 64;
						}
					}
				}
			}
			potentialEnemyMoves = potentialEnemyMovesHolder;
			
			while(potentialEnemyMoves <= 63){
				potentialEnemyMoves = potentialEnemyMoves + 8;
				if(potentialEnemyMoves <= 63){
					if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
					}
					else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
					checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
						document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
						potentialEnemyMoves = 64;
					}
					else{
						potentialEnemyMoves = 64;
					}
				}
			}
			potentialEnemyMoves = potentialEnemyMovesHolder;
			if((potentialEnemyMoves + 1) % 8 != 0){
				while(potentialEnemyMoves <= 63){
					potentialEnemyMoves = potentialEnemyMoves + 9;
					if(potentialEnemyMoves <= 63){
						if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild == null){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							if ((potentialEnemyMoves + 1) % 8 == 0){
								potentialEnemyMoves = 64;
							}
						}
						else if(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild != null && 
						checkPieceColor(document.getElementById(boardTileArray[potentialEnemyMoves]).firstChild.id) == "black"){
							document.getElementById(boardTileArray[potentialEnemyMoves]).style.backgroundColor = "blue";
							potentialEnemyMoves = 64;
						}
						else{
							potentialEnemyMoves = 64;
						}
					}
				}
			}
	}
}
