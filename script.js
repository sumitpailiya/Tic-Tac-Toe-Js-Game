let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msgcontainer");
let newGame = document.querySelector("#newGame");
let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame=()=>{
  turnO=true
  enableBoxes();
  msgcontainer.classList.add("hide")
}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes=()=> {
  for (let box of boxes){
    box.disabled=true
  }
}

const enableBoxes=()=>{
  for (let box of boxes){
    box.disabled=false;
    box.innerHTML=""
  }
}
const showWinner = (winner) => {
  msg.innerHTML = `Congratualtion, winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
};
const checkWinner = () => {
  for (pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerHTML;
    let pos2Val = boxes[pattern[1]].innerHTML;
    let pos3Val = boxes[pattern[2]].innerHTML;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        return showWinner(pos1Val);
      }
    }
  }
};

newGame.addEventListener("click", resetGame)
reset.addEventListener("click", resetGame)

