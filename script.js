canvas = document.querySelector('canvas'); // place canvas from html into canvas variable
c = canvas.getContext('2d'); // gives access to 2d drawing functions for canvas
canvas.width = 400;
canvas.height = 400;
pumpkin = document.getElementById('Pumpkin');
c.drawImage(pumpkin,0,0,400,400);
canDraw=false;

width=5;
function changeWidth(num){
if(width==5&&num<0){
    alert('This is the minimum brush size.');
}
else if(width==25&&num>0){
    alert('This is the maximum brush size.')
}
else{
    width+=num;
}
}

function reset(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.drawImage(pumpkin,0,0,400,400);
}


url = canvas.toDataURL("image/png");
download = document.getElementById("canvasDownload");
download.href=url;

function start(){ // on click, set canDraw to true so it knows when to actually draw
    canDraw=true;
}

function end(){ // after letting go of click, set canDraw to false so it knows when to actually stop drawing
    url = canvas.toDataURL("image/png");
    download.href=url;
    canDraw=false;
c.beginPath(); // reset path each time user lets go of mouse 
}

function draw(e){
    if(canDraw){
    c.lineTo(e.clientX, e.clientY); // create a line to mouse position 
    c.lineWidth=width;
    c.stroke();
    c.moveTo(e.clientX,e.clientY);
    }
}

canvas.addEventListener('mousedown',start); // when click input is active, use start function
canvas.addEventListener('mouseup',end); // after user lets go of click, use end function
canvas.addEventListener('mousemove',draw);









