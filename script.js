//your code here

const gameContainer=document.getElementById('gameContainer')
const scoreDisplay:document.getElementById('score')

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


function createFood(){

	

	
}
