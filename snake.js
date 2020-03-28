









function createMatrix() {
  let matrix = [];

  matrix.size = 100;




for (let i = 0; i < matrix.size; i++) {
  matrix[i] = [];
  matrix[i].size = 100;
  for (let j = 0; j < matrix[i].size; j++) {
    matrix[i][j] = 0;
  }
}
return matrix;
}

function play() {
  
}

let head = {x: 2, y: 0};
let snake = [head, {x: 1, y: 0}, {x: 0, y: 0}];
let direction = "right";


function draw() {
  console.log("a");
  const canvas = document.getElementById("snake");
  let CTX = canvas.getContext("2d");
  matrix = createMatrix();
  matrix[0][0] = "right";
  matrix[1][0] = "right";
  matrix[5][0] = "fruit";
  
  setInterval(function() {
    /*
    for(let i = 0; i < 101; i++) {
      CTX.beginPath();
      CTX.rect(i * 5, i * 5, 5, 5);
      CTX.stroke();
    }
    */
   
   CTX.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < snake.length; i++) {
    CTX.beginPath();
    console.log(snake[i].x, snake[i].y);
    CTX.rect(snake[i].x * 5, snake[i].y * 5, 5, 5);
    CTX.stroke();
  }
  console.log("b")
    switch(direction) {
      case 'right':
        matrix[head.x][head.y] = "right"
      if (head.x + 1 < 100)
        head.x = head.x + 1;
      break;
      case 'left':
        matrix[head.x][head.y] = "left"
        if (head.x - 1 >= 0)
        head.x = head.x - 1;
        break;
      case 'up':
        matrix[head.x][head.y] = "up"
        if (head.y - 1 >= 0)
        head.y = head.y - 1;
        break;
      case 'down':
        matrix[head.x][head.y] = "down"
        if (head.y + 1 < 100)
        head.y = head.y + 1;
        break;
    }
    for (let i = 0; i < snake.length; i++) {
      if (i > 0)
      switch (matrix[snake[i].x][snake[i].y]) {
        case "right":
          //if (snake[i].x !== snake[i - 1].x && snake[i].y !== snake[i - 1].y)
          snake[i].x++;
          break;
        case "left":
        //if (snake[i].x !== snake[i - 1].x && snake[i].y !== snake[i - 1].y)
            snake[i].x--;
          break;
        case "up":
        //if (snake[i].x !== snake[i - 1].x && snake[i].y !== snake[i - 1].y)
          snake[i].y--;
          break;
        case "down":
          //if (snake[i].x !== snake[i - 1].x && snake[i].y !== snake[i - 1].y)
            snake[i].y++;
          break;
      }
    }

    if (matrix[snake[0].x][snake[0].y] === "fruit") {
      switch (matrix[snake[snake.length - 1].x][snake[snake.length - 1].y]) {
        case "right":
          //if (snake[i].x !== snake[i - 1].x && snake[i].y !== snake[i - 1].y)
          snake.push({x: snake[snake.length - 1].x - 1, y: snake[snake.length - 1].y})
          break;
        case "left":
        //if (snake[i].x !== snake[i - 1].x && snake[i].y !== snake[i - 1].y)
        snake.push({x: snake[snake.length - 1].x + 1, y: snake[snake.length - 1].y})
          break;
        case "up":
        //if (snake[i].x !== snake[i - 1].x && snake[i].y !== snake[i - 1].y)
        snake.push({x: snake[snake.length - 1].x, y: snake[snake.length - 1].y - 1})

          break;
        case "down":
          //if (snake[i].x !== snake[i - 1].x && snake[i].y !== snake[i - 1].y)
        snake.push({x: snake[snake.length - 1].x, y: snake[snake.length - 1].y + 1})     
          break;
      
      }
      let xRand = Math.floor(Math.random() * 100)
      let yRand = Math.floor(Math.random() * 100)
      console.log("rand", xRand, yRand)
      matrix[xRand][yRand] = "fruit";
    }


    for(let i = 0; i < matrix.length; i++) {
      for(let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === "fruit") {
          CTX.beginPath();
          CTX.strokeStyle = "red";
          CTX.rect(i * 5, j * 5, 5, 5);
          CTX.stroke();
          CTX.strokeStyle = "black";
        }
      }
    }

  }, 50);
  
}


function key() {
  const key = event.key;
  console.log(key);
  
  if(key === "ArrowLeft") {
    direction = "left";
  }
  if(key === "ArrowRight") {
    direction = "right";
  }
  if(key === "ArrowUp") {
    direction = "up";
  }
  if(key === "ArrowDown") {
    direction = "down";
  }
}