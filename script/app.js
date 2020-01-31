(() => {
	// set up the puzzle pieces and boards
	// buttons at the bottom of the page
	// nav buttons is imaegs at the bottom
	// const is  a thing that nevr changes 
	const navButtons = document.querySelectorAll("#buttonHolder img"),
		  puzzlePiece = document.querySelectorAll(".puzzle-pieces img"),
		  puzzleboard = document.querySelector(".puzzle-board");
	
// functions go here its what we want to happen when our triggers fire
// //images stored here
const pieces = ["topLeft", "topRight", "bottomRight", "bottomRight"];

	function changeImageSet(){
// change the thumbnail images on the left to match the button image
// and set a backgrond image on the drop zone container
	//debugger;
	pieces.forEach((piece, index) => puzzlePiece[index].src=`images/${piece + this.dataset.puzzleindex}.jpg`);
	// the ``lets you pass through variables 
	puzzleboard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleindex}.jpg)`;
}
	// add some event handling for the navButtons
	navButtons.forEach(button => button.addEventListener("click", changeImageSet));

})();
