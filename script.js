//your JS code here. If required.
let btn = document.querySelector("#submit");
let container = document.querySelector(".container");

btn.addEventListener("click", function() {
	let player1 = document.querySelector("#player-1").value.trim();
	let player2 = document.querySelector("#player-2").value.trim();

	if (player1 === "" || player2 === "") {
		alert("Please enter names for both players!");
		return;
	}

	container.innerHTML = `
	<h1>TIC TAC TOE</h1>
	<div class="message">${player1}, you're up</div>
	<div class="board">
	<div class="cell" id="1"></div>
	<div class="cell" id="2"></div>
	<div class="cell" id="3"></div>
	<div class="cell" id="4"></div>
	<div class="cell" id="5"></div>
	<div class="cell" id="6"></div>
	<div class="cell" id="7"></div>
	<div class="cell" id="8"></div>
	<div class="cell" id="9"></div>
	</div>`;

	let msg = document.querySelector(".message");
	let cells = document.querySelectorAll(".cell");

	let turn = "X";
	let moves = 0;

	const winCombos = [
	    [1,2,3],[4,5,6],[7,8,9], 
	    [1,4,7],[2,5,8],[3,6,9], 
	    [1,5,9],[3,5,7]          
	];

	cells.forEach(cell => {
    cell.addEventListener("click", function() {
        if (cell.textContent !== "") return;
        cell.textContent = turn;
        moves++;

		let playerCells = Array.from(cells)
                                   .filter(c => c.textContent === turn)
                                   .map(c => Number(c.id));

            let won = winCombos.some(combo => combo.every(id => playerCells.includes(id)));
            if (won) {
                msg.textContent = `${turn === "X" ? player1 : player2}, congratulations you won!`;
                cells.forEach(c => c.style.pointerEvents = "none"); 
                return;
            }

            if (moves === 9) {
                msg.textContent = "It's a tie!";
                return;
            }

			turn = turn === "X" ? "O" : "X";
	            msg.textContent = `${turn === "X" ? player1 : player2}, you're up`;
	        });

		});
});