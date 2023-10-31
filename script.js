canvas = document.querySelector('canvas'); // place canvas from html into canvas variable
c = canvas.getContext('2d'); // gives access to 2d drawing functions for canvas
canvas.width = 500;
canvas.height = 500;
pumpkin = document.getElementById('Pumpkin');
c.drawImage(pumpkin,0,0,500,500);

canDraw=false;

function start(){ // on click, set canDraw to true so it knows when to actually draw
canDraw=true;
}

function end(){ // after letting go of click, set canDraw to false so it knows when to actually stop drawing
canDraw=false;
c.beginPath(); // reset path each time user lets go of mouse 
}

function draw(e){
    if(canDraw){
    c.lineTo(e.clientX, e.clientY); // create a line to mouse position 
    c.stroke();
    c.moveTo(e.clientX,e.clientY);
    }
}

canvas.addEventListener('mousedown',start); // when click input is active, use start function
canvas.addEventListener('mouseup',end); // after user lets go of click, use end function
canvas.addEventListener('mousemove',draw);




