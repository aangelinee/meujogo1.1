var fundo, fundoImage;
var foguete, fogueteImage;
var navealien, naveImage; 
var meteoro, meteoroImage, meteoroGroup;
var boost, boostImage, boostGroup;
var chaveuniverso;
var form;
var playerCount;
var canvas;

function preload()
{
fundoImage = loadImage("./imagens/fundo.jpg");
fogueteImage = loadImage("./imagens/foguete.png");
naveImage = loadImage("./imagens/navealien.png");
meteoroImage = loadImage("./imagens/meteoro.png");
boostImage = loadImage("./imagens/boost.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  //game.getState();
  game.start();
}


function draw() {
  background(fundoImage);
  
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }

  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


