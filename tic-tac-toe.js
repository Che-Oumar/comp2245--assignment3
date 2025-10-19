
document.addEventListener("DOMContentLoaded", function() {
   const squares = document.querySelectorAll("#board div"); 
   let turn = "X";
   const state = Array(9).fill(null);
   squares.forEach(function(square, index) {
       square.classList.add("square");
       square.addEventListener("mouseover", function() {
           square.classList.add("hover");
       });
       
       square.addEventListener("mouseenter", function() {
           square.classList.remove("hover");
       });
       
       square.addEventListener("mouseleave", function() {
           square.classList.remove("hover");
       });

       square.addEventListener("click", function() {
           if (state[index] === null) {
               state[index] = turn;
               square.classList.add(turn);
               square.textContent = turn;
               turn = turn === "X" ? "O" : "X";
           }
       });
   });
});
