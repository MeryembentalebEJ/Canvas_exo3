var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.beginPath();
var degrade = ctx.createLinearGradient(8, 3, 300, 6);
degrade.addColorStop(1, 'white',);
degrade.addColorStop(0, '#c5901b');
ctx.fillStyle = degrade;
ctx.arc(150, 45, 40, 3.1, 2 * Math.PI);
ctx.fill();
ctx.beginPath()
ctx.fillStyle = '#f1b531';
ctx.moveTo(109, 45); 
ctx.lineTo(190, 45); 
ctx.lineTo(185, 55); 
ctx.lineTo(150, 150);
ctx.fill();


