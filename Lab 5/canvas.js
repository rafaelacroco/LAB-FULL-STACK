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

ctx2.beginPath();
ctx2.lineWidth = 5;
ctx2.fillStyle = 'blue';
ctx2.fillRect(0,0,45,45);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 5;
ctx2.fillStyle = 'red';
ctx2.fillRect(255,0,45,45);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 5;
ctx2.fillStyle = 'red';
ctx2.fillRect(110,150,40,40);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 5;
ctx2.fillStyle = 'aquamarine';
ctx2.fillRect(0,150,30,30);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 5;
ctx2.fillStyle = 'aquamarine';
ctx2.fillRect(0,120,30,30);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 5;
ctx2.fillStyle = 'aquamarine';
ctx2.fillRect(270,135,30,30);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 5;
ctx2.fillStyle = 'yellow';
ctx2.fillRect(0,270,60,30);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 5;
ctx2.fillStyle = 'yellow';
ctx2.fillRect(0,240,30,30);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 5;
ctx2.fillStyle = 'black';
ctx2.fillRect(240,270,60,30);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 5;
ctx2.fillStyle = 'black';
ctx2.fillRect(270,240,30,30);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'green';
ctx2.strokeRect(150,150,150,150);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'green';
ctx2.strokeRect(0,150,150,150);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 3;
ctx2.strokeStyle = 'black';
ctx2.strokeRect(0,0,300,300);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'yellow';
ctx2.strokeStyle = 'green';
ctx2.arc(210,230,15,Math.PI,4*Math.PI);
ctx2.fill();
ctx2.stroke()
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'yellow';
ctx2.strokeStyle = 'green';
ctx2.arc(70,230,15,Math.PI,4*Math.PI);
ctx2.fill();
ctx2.stroke()
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'aquamarine';
ctx2.strokeStyle = 'blue';
ctx2.arc(150,115,15,Math.PI,4*Math.PI);
ctx2.fill();
ctx2.stroke()
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.strokeStyle = 'green';
ctx2.arc(150,150,60,Math.PI,2*Math.PI);
ctx2.stroke()
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 3;
ctx2.fillStyle = 'blue';
ctx2.moveTo(45,45)
ctx2.lineTo(150, 150);
ctx2.lineTo(149, 150);
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 3;
ctx2.fillStyle = 'red';
ctx2.moveTo(255,45)
ctx2.lineTo(150, 150);
ctx2.lineTo(149, 150);
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.strokeStyle = 'green';
ctx2.arc(150,150,80,Math.PI,1.25*Math.PI);
ctx2.stroke()
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.strokeStyle = 'green';
ctx2.arc(150,150,80,1.75*Math.PI,0.010*Math.PI);
ctx2.stroke()
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.strokeStyle = 'green';
ctx2.arc(150,300,80,Math.PI,1.5*Math.PI);
ctx2.stroke()
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.strokeStyle = 'green';
ctx2.arc(150,300,60,1.5*Math.PI,Math.PI);
ctx2.stroke()
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'aquamarine';
ctx2.strokeStyle = 'green';
ctx2.arc(150,298,40,Math.PI,2*Math.PI);
ctx2.fill();
ctx2.stroke()
ctx2.closePath();