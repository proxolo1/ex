let dev = document.getElementById('developer');
let str = "nice to meet you";
let i = 0;
let menu = document.querySelector('.menu');
let main = document.querySelector('.main');
main.style.left = '34em'
setInterval(() => {

    if (i < str.length) {

        dev.innerHTML += str[i++];

    }
    else {
        dev.innerHTML = "";
        i = 0;
    }

}, 400)


let navs = document.querySelectorAll('.nav');

menu.addEventListener('mousemove', (events) => {
    console.log(navs);
    navs.forEach(nav => {
        nav.style.transform = 'rotateZ(360deg)';
    })
})
menu.addEventListener('mouseout', (events) => {
    navs.forEach(nav => {
        nav.style.transform = 'rotateZ(354deg)';
    })

})
