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
    let Height = getRandomIntInclusive(-90,389);
    let Width = getRandomIntInclusive(-90,389);
    console.log(Height);
    game.display.innerHTML=`<div class="circle-bigger" id="circle_bigger" style="top:${Height}px;left:${Width}px">
            <div id="circle" class="circle" ></div>
        </div>`;

    let bolinha = document.getElementById('circle');
    let bolinhaMaior = document.getElementById('circle_bigger');

    bolinha.addEventListener('click',addPoint);
    let anim1 = setInterval(frame1,1);
    let anim2 = setInterval(frame2,1);
    let color1 = 255;
    let color2 = 255;
    function frame1(){
        if(color1 > 0){
            color1--;
            bolinha.style.backgroundColor = `rgb(${color1},${color1},${color1})`;
        }
        else{
            clearInterval(anim1);
        }
    }
    function frame2(){
        if(color2 > 0){
            color2--;
            bolinhaMaior.style.backgroundColor = `rgba(255,${color1},${color1},0.5)`;
        }
        else{
            clearInterval(anim2);
        }
    }

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


