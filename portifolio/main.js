let dev = document.getElementById("developer");
let str = "something";
let i = 0,
  j = 0;
let menus = document.querySelectorAll(".menu");
let main = document.querySelector(".main");
let counter = document.querySelectorAll("#count");
let divLine = document.querySelector(".line");
let scrollTop = 0;

// setInterval(() => {
//   if (i < str.length) {
//     dev.innerHTML += str[i++];
//   } else {
//     dev.innerHTML = "";
//     i = 0;
//   }
// }, 400);

let navs = document.querySelectorAll(".nav");

// menus.forEach((menu) => {
//   menu.addEventListener("mousemove", (events) => {
//     console.log(navs);
//     navs.forEach((nav) => {
//       nav.style.transform = "rotateZ(360deg)";
//     });
//   });
// });
// menus.forEach((menu) => {
//   menu.addEventListener("mouseout", (events) => {
//     navs.forEach((nav) => {
//       nav.style.transform = "rotateZ(354deg)";
//     });
//   });
// });
document.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  let ABOUTop = 405,
    ABOUTBottom = 1410;
  if (
    ABOUTop <= Math.floor(window.pageYOffset) &&
    ABOUTBottom >= Math.floor(window.pageYOffset)
  ) {
    setInterval(() => {
      if (j <= 10) {
        counter[0].innerHTML = j++;
        divLine.style.backgroundColor = "green";
      } else {
        clearInterval();
        divLine.style.backgroundColor = "white";
      }
    }, 500);
  }
});
