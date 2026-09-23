// Menyiapkan Canvas
const mycanvas = document.querySelector('#mycanvas');

// Atur Ukuran Canvas
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

//Tentukan Context
const c = mycanvas.getContext('2d');

// //Manipulasi Canvas 


// //Membuat Kotak
// c.fillStyle = 'blue';
// c.strokeStyle = 'black';
// c.lineWidth = '3';

// c.rect(25, 25, 100, 100);
// c.fill();
// c.stroke();

// //Membuat Lingkaran 
// c.fillStyle='pink';
// c.beginPath();
// c.arc(200, 80, 55, 0, 2 * Math.PI);
// c.fill();
// c.stroke();

// //Membuat Path 9 (Segitiga)
// // Susah juga membuat ukurannya yng sama



// //Membuat Animasi lingkaran (bisa bergerak)


let x=200;
let y=55;
let speedX = 15;
let speedY = 15;
let radius = 30;


function draw() {
    window.requestAnimationFrame(draw);
    c.clearRect(0, 0, innerWidth, innerHeight);
    console.log('ok!');
    c.fillStyle='black';
    c.beginPath();
    c.arc(x, y, radius, 0, 2 * Math.PI);
    c.fill();
    c.stroke();

    if (x + radius> innerWidth || x - radius < 0){
        speedX= -speedX;
    }
    x += speedX;

     if (y + radius> innerHeight || y - radius < 0){
        speedY= -speedY;
    }
    y += speedY;
}

draw();
