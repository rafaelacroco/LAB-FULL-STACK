let canva1 = document.getElementById("canva1");
let ctx = canva1.getContext("2d");

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'gray';
ctx.fillRect(0,230,300,70);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = '#8e4301';
ctx.fillRect(100,140,80,90);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'orange';
ctx.moveTo(140,90)
ctx.lineTo(180, 140);
ctx.lineTo(100, 140);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = '#a8d8f8';
ctx.fillRect(105,160,25,25);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = '#a8d8f8';
ctx.fillRect(150,160,25,25);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = '#612e01';
ctx.fillRect(130,185,20,45);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = '#efe034';
ctx.arc(230,90,40,Math.PI,4*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = '#612e01';
ctx.fillRect(265,220,10,45);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'green';
ctx.arc(270,220,20,Math.PI,4*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = '#612e01';
ctx.fillRect(35,190,10,40);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'green';
ctx.arc(40,180,20,Math.PI,4*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'blue';
ctx.arc(0, 220,35,Math.PI,2.3*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'blue';
ctx.arc(130, 300,30,Math.PI,2.3*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'blue';
ctx.fillRect(0,220,35,100);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'blue';
ctx.fillRect(30,271,110,29);
ctx.closePath();

let canva2 = document.getElementById("canva2");
let ctx2 = canva2.getContext("2d");