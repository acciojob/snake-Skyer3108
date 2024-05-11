//your code here

const gameContainer=document.getElementById('gameContainer')
const scoreDisplay=document.getElementById('score')

const gridSize=40;
let snake=[{x:20,y:1}]
let direction='right';
let food={}
let score=0;


function createPixel(x,y,className){

	const pixel=document.createElement('div');

	pixel.classList.add('pixel',className);

	pixel.style.gridColumn=x;
	pixel.style.gridRow=y

	gameContainer.appendChild(pixel)
}


function createFood() {
    let x = Math.floor(Math.random() * gridSize) + 1;
    let y = Math.floor(Math.random() * gridSize) + 1;
    food = {x, y};
    const foodPixelId = `pixel${y * gridSize + x}`;
    const foodPixel = document.getElementById(foodPixelId);
    foodPixel.classList.add('food');
}

function drawSnake() {
    snake.forEach(segment => {
        const pixelId = `pixel${segment.y * gridSize + segment.x}`;
        const snakePixel = document.getElementById(pixelId);
        snakePixel.classList.add('snakeBodyPixel');
    });
}

function moveSnake() {
    const head = snake[0];
    let newHead = {};
    switch (direction) {
        case 'up':
            newHead = {x: head.x, y: head.y - 1};
            break;
        case 'down':
            newHead = {x: head.x, y: head.y + 1};
            break;
        case 'left':
            newHead = {x: head.x - 1, y: head.y};
            break;
        case 'right':
            newHead = {x: head.x + 1, y: head.y};
            break;
    }
    snake.unshift(newHead);
    const tail = snake.pop();
    const tailPixelId = `pixel${tail.y * gridSize + tail.x}`;
    const tailPixel = document.getElementById(tailPixelId);
    tailPixel.classList.remove('snakeBodyPixel');
}

function checkCollision() {
    const head = snake[0];
    // Check collision with walls
    if (head.x <= 0 || head.x > gridSize || head.y <= 0 || head.y > gridSize) {
        gameOver();
    }
    // Check collision with itself
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            gameOver();
        }
    }
    // Check collision with food
    if (head.x === food.x && head.y === food.y) {
        eatFood();
    }
}

function eatFood() {
    score++;
    scoreDisplay.textContent = score;
    createFood();
}

function gameOver() {
    clearInterval(gameInterval);
    alert('Game Over!');
}

createFood();
drawSnake();

const gameInterval = setInterval(() => {
    moveSnake();
    drawSnake();
    checkCollision();
}, 100);


