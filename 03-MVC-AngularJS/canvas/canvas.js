const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.style.border = '2px solid';
canvas.style.width = '1000px';
canvas.style.height = '500px';

//Draw grass
ctx.fillStyle = 'green';
ctx.fillRect(0, 100, 300, 50);

//Draw sky
ctx.fillStyle = 'deepskyblue';
ctx.fillRect(0, 0, 300, 100);

//Draw car
ctx.fillStyle = 'red';
ctx.fillRect(30, 85, 60, 20);
ctx.fillRect(45, 75, 30, 10);

//Draw car wheels
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(45, 105, 7, 0, 6.5);
ctx.stroke();
ctx.fill();
ctx.beginPath();
ctx.arc(75, 105, 7, 0, 6.5);
ctx.stroke();
ctx.fill();