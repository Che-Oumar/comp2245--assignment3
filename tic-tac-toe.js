
document.addEventListener("DOMContentLoaded", function() {
   const squares = document.querySelectorAll("#board div"); 
   let turn = "X";
   const state = Array(9).fill(null);
   const resetButton = document.querySelector(".btn");
   const status = document.getElementById("status");
   const winningCombinations = [
       [0,1,2], [3,4,5], [6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
   ];
   let gameOver= false;

    resetButton.addEventListener("click", function() {
            state.fill(null);
            squares.forEach(function(sq) {
                sq.classList.remove("X", "O");
                sq.textContent = "";
                });
                turn = "X";
                status.textContent = "Move your mouse over a square and click to play an X or an O.";
                status.classList.remove("you-won");
                gameOver = false;
        });
   squares.forEach(function(square, index) {
       square.classList.add("square");
       
       square.addEventListener("mouseenter", function() {
           square.classList.add("hover");
       });
       
       square.addEventListener("mouseleave", function() {
           square.classList.remove("hover");
       });
       
       
       square.addEventListener("click", function() {
           if (!gameOver && state[index] === null) {
               state[index] = turn;
               square.classList.add(turn);
               square.textContent = turn;
                for (const combination of winningCombinations) {
                    const [a, b, c] = combination;
                    if (state[a] && state[a] === state[b] && state[a] === state[c]) {
                        setTimeout(function() {
                            gameOver = true;
                            status.textContent = `Congratulations! ${state[a]} wins!`;
                            status.classList.add("you-won");
                        }, 100);
                        
                        break;
                    }
                }
               turn = turn === "X" ? "O" : "X";
           }
       });
   });
});
