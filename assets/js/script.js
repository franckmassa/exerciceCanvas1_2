var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
//Toit maison
ctx.beginPath();
ctx.moveTo(200,50);
ctx.lineTo(300,150);
ctx.lineTo(100,150);
ctx.closePath();
ctx.fillStyle = '#D7823E';
ctx.fill();
//carré maison
ctx.beginPath();
ctx.fillStyle = '#A1D8E6';
ctx.fillRect(100,150,200,200);
ctx.fill();
//carré fenêtre gauche
ctx.beginPath();
ctx.fillStyle = '#C9C9C9';
ctx.fillRect(110,160,50,50);
ctx.fill();
//carré fenêtre droite
ctx.beginPath();
ctx.fillStyle = '#C9C9C9';
ctx.fillRect(240,160,50,50);
ctx.fill();
//carré porte
ctx.beginPath();
ctx.fillStyle = '#C9C9C9';
ctx.fillRect(170,270,50,80);
ctx.fill();
