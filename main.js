
// const myModule = require("./function");
// let ecom = `

// █     █░▓█████  ██▓     ▄████▄   ▒█████   ███▄ ▄███▓▓█████    ▄▄▄█████▓ ▒█████     ▓█████  ▄████▄   ▒█████   ███▄ ▄███▓
// ▓█░ █ ░█░▓█   ▀ ▓██▒    ▒██▀ ▀█  ▒██▒  ██▒▓██▒▀█▀ ██▒▓█   ▀    ▓  ██▒ ▓▒▒██▒  ██▒   ▓█   ▀ ▒██▀ ▀█  ▒██▒  ██▒▓██▒▀█▀ ██▒
// ▒█░ █ ░█ ▒███   ▒██░    ▒▓█    ▄ ▒██░  ██▒▓██    ▓██░▒███      ▒ ▓██░ ▒░▒██░  ██▒   ▒███   ▒▓█    ▄ ▒██░  ██▒▓██    ▓██░
// ░█░ █ ░█ ▒▓█  ▄ ▒██░    ▒▓▓▄ ▄██▒▒██   ██░▒██    ▒██ ▒▓█  ▄    ░ ▓██▓ ░ ▒██   ██░   ▒▓█  ▄ ▒▓▓▄ ▄██▒▒██   ██░▒██    ▒██ 
// ░░██▒██▓ ░▒████▒░██████▒▒ ▓███▀ ░░ ████▓▒░▒██▒   ░██▒░▒████▒     ▒██▒ ░ ░ ████▓▒░   ░▒████▒▒ ▓███▀ ░░ ████▓▒░▒██▒   ░██▒
// ░ ▓░▒ ▒  ░░ ▒░ ░░ ▒░▓  ░░ ░▒ ▒  ░░ ▒░▒░▒░ ░ ▒░   ░  ░░░ ▒░ ░     ▒ ░░   ░ ▒░▒░▒░    ░░ ▒░ ░░ ░▒ ▒  ░░ ▒░▒░▒░ ░ ▒░   ░  ░
//   ▒ ░ ░   ░ ░  ░░ ░ ▒  ░  ░  ▒     ░ ▒ ▒░ ░  ░      ░ ░ ░  ░       ░      ░ ▒ ▒░     ░ ░  ░  ░  ▒     ░ ▒ ▒░ ░  ░      ░
//   ░   ░     ░     ░ ░   ░        ░ ░ ░ ▒  ░      ░      ░        ░      ░ ░ ░ ▒        ░   ░        ░ ░ ░ ▒  ░      ░   
//     ░       ░  ░    ░  ░░ ░          ░ ░         ░      ░  ░                ░ ░        ░  ░░ ░          ░ ░         ░   
//                         ░                                                                  ░                            
                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                                                        

// `, i = 0;
// let interval = setInterval(() => {
//     if (i < ecom.length) {
//         process.stdout.write(ecom[i]);
//         i++
//     }
//     else {
//         clearInterval(interval);
//         myModule.startApp();
//     }





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
    />
    <style>
      body {
        background-color: #0f0;
      }
      
      .box {
        height: 50vh;
        width: 80vh;
        background-color: black;
        position: relative;
        left: 20vh;
        box-shadow: -1px 2px 17px 5px rgba(0, 0, 0, 0.28);
      }
      .header {
        background-color: #0f0;
        width: 100%;
        height: 5vh;
        border: 2px solid black;
        position: relative;
        cursor: grab;
      }
      .main {
        background-image: url(https://media2.giphy.com/media/MC6eSuC3yypCU/giphy.gif?cid=ecf05e47rtyv0gbfdonse895rxnt96q97mbsrodpjx372mlf&rid=giphy.gif&ct=g);
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100%;
        position: relative;
      }
    </style>
  </head>
  <body>
    <main>
      <!-- <div class="container-fluid"> -->
        <!-- <div class="box"></div> -->
        <div class="box">
          <div class="header"></div>
          <div class="main"></div>
        </div>
      <!-- </div> -->
    </main>
    <script>
      let box = document.querySelector(".box");
      let header=document.querySelector('.header')
      let clicked = false;
      offset = {};
      header.addEventListener("mousedown", (event) => {
        console.log(event.offsetX, event.offsetY);
        clicked = true;
        offset.x = event.offsetX;
        offset.y = event.offsetY;
        header.style.cursor="grabbing";
        document.body.style.backgroundColor='red'
      });
      header.addEventListener("mouseup", (event) => {
        clicked = false;
        header.style.cursor="grab";
        document.body.style.backgroundColor="#0f0"
      });
      document.addEventListener("mousemove", (event) => {
        if (clicked) {
          console.table(event.clientX, event.clientY, offset.x, offset.y);
          setTimeout(() => {
            box.style.left = `${event.clientX - offset.x}px`;
            box.style.top = `${event.clientY - offset.y}px`;
          }, 300);
        }
      });
    </script>
  </body>
</html>


// });



