const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "./img/ground.png";

const foodImg = new Image();
foodImg.src = "./img/foodImg.png";

let box = 32;
let score = 0;

let food = {
  x: Math.floor(Math.random() * 17 + 1) * box,
  y: Math.floor(Math.random() * 15 + 3) * box,
};

let snake = [];
snake[0] = {
  x: 9 * box,
  y: 10 * box,
};

document.addEventListener("keydown", direction);

let dir;

const direction = (event) => {
  if (e.keyCode === 37 && dir !== "right") dir = "left";
  else if (e.keyCode === 38 && dir !== "down") dir = "up";
  else if (e.keyCode === 39 && dir !== "left") dir = "right";
  else if (e.keyCode === 40 && dir !== "up") dir = "down";
};

const drawGame = () => {
  ctx.drawImage(ground, 0, 0);
  ctx.drawImage(foodImg, food.x, food.y);
  for (let i = 0; i < snake.length; i += 1) {
    ctx.fillStyle = i === 0 ? "green" : "red";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }

  ctx.fillStyle = "white";
  ctx.font = "50px Arial";
  ctx.fillText(`score: ${score}`, box * 6, box * 1.6);

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  snake.pop();

  if (dir === "left") snakeX -= box;
  if (dir === "right") snakeX += box;
  if (dir === "up") snakeY -= box;
  if (dir === "down") snakeY += box;

  const newHead = {
    x: snakeX,
    y: snakeY,
  };

  snake.unshift(newHead);
};

let game = setInterval(drawGame, 100);
