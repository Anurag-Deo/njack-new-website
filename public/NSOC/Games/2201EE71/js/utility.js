function displayWelcomeMessage() {
  c.fillStyle = "white";
  c.font = "30px Arial";
  c.textAlign = "center";
  c.fillText(
    "Welcome to the Fighting Game! Battle out to enter IIT Patna premises!",
    canvas.width / 2,
    canvas.height / 2 - 40
  );
  c.fillText(
    "Player 1: Use A to move left, D to move right, W to jump, SPACE to attack",
    canvas.width / 2,
    canvas.height / 2
  );
  c.fillText(
    "Player 2: Use Arrow keys to move, Arrow Up to jump, Arrow Down to attack",
    canvas.width / 2,
    canvas.height / 2 + 40
  );
  c.fillText(
    "Press any key to start...",
    canvas.width / 2,
    canvas.height / 2 + 80
  );
}

function clearWelcomeMessage() {
  // c.clearRect(0, 0, canvas.width, canvas.height);
  background.update(); // Redraw background after clearing message
  // shop.update();
}
function startGame() {
  clearWelcomeMessage();
  decreaseTimer(); // Start the game timer
  animate(); // Start the game loop
}

window.addEventListener("keydown", function (event) {
  if (!gameStarted) {
    gameStarted = true;
    startGame();
  }
});

function rectangularcollision({ rect1, rect2 }) {
  return (
    rect1.attackbox.position.x + rect1.attackbox.width >= rect2.position.x &&
    rect1.attackbox.position.x <= rect2.position.x + rect2.width &&
    rect1.attackbox.position.y + rect1.attackbox.height >= rect2.position.y &&
    rect1.attackbox.position.y <= rect2.position.y + rect2.height
  );
}
let cnt = 0;
function determineWinner({ player, enemy, timerId }) {
  clearTimeout(timerId);
  document.querySelector("#displaytext").style.display = "flex";
  if (player.health == enemy.health && cnt == 0) {
    document.querySelector("#displaytext").innerHTML = "Tie!";
    cnt++;
  } else if (player.health > enemy.health && cnt == 0) {
    document.querySelector("#displaytext").innerHTML = "Player 1 Wins!";
    cnt++;
  } else if (player.health < enemy.health && cnt == 0) {
    document.querySelector("#displaytext").innerHTML = "Player 2 Wins!";
    cnt++;
  }
}
let timer = 60;
let timerId;
function decreaseTimer() {
  if (gameStarted) {
    if (timer > 0) {
      timerId = setTimeout(decreaseTimer, 1000);
      timer--;
      document.querySelector("#timer").innerHTML = timer;
    }
    if (timer == 0) {
      determineWinner({ player, enemy, timerId });
    }
  }
}
