window.onload(onload());
let game ={
    display: document.getElementById('game'),
    currentBalls: 0,
    totalBalls:5,
    points:0,
    time:0,
    speed:5000,
    state:false
}

function onload(){
    
    window.document.getElementById('op0').addEventListener('click',newGame);
    window.document.getElementById('op1').addEventListener('click',open_configuration);
    window.document.getElementById('op2').addEventListener('click',open_about);

}

async function newGame(){
    game.state = true;
    game.points = 0;

    createCircle();
        
            
}

function open_configuration(){
    let background = document.getElementById('background_configuration');
    background.style.display = "flex";
    let totalballs = document.getElementById('config_totalballs')
    totalballs.value = game.totalBalls;
    let speed = document.getElementById('config_speed');
    speed.value  = game.speed;
    document.getElementById('close_configuration').addEventListener('click',()=>{
        
        background.style.display = 'none';
    });
    
    document.getElementById('confirm_configuration').addEventListener('click',()=>{
        game.totalBalls = totalballs.value;
        game.speed = speed.value;
        background.style.display = 'none';

        console.log(`totalballs:${game.totalBalls},speed:${game.speed}`);
    });
}
function open_about(){
    let background = document.getElementById('background_about');
    background.style.display = "flex";
    document.getElementById('close_about').addEventListener('click',()=>{
        background.style.display = 'none';
    });
    
}   

/*
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
*/

function createCircle(){
    let Height = getRandomIntInclusive(0,478);
    let Width = getRandomIntInclusive(0,478);
    game.display.innerHTML=`<div class="circle" style="position: relative; top:${Height}px; left:${Width}px"></div>`;
    document.getElementsByClassName('circle')[0].addEventListener('click',addPoint);

}

function addPoint(){
    game.points++;
    game.currentBalls++;
    console.log(game.points);
    game.display.innerHTML="";
    if(game.points != game.totalBalls){
        createCircle();
    }
    else{
        endGame();
    }
}

function endGame(){
    game.display.innerHTML ='<h1>Fim de jogo</h1>'
    game.state = false;

}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


