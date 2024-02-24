button = document.getElementById("button")
button.addEventListener('click',async () => {
    heading = document.getElementById('heading')
    heading.innerText="Dice Game";
    console.log("This is clicked");
    
    const canvas1=document.getElementById("canvas1")
    const canvas2=document.getElementById("canvas2")
    var a=0,b=0;
    for(var j=0;j<15;j++){
        draw(canvas1,a=generateRandom())
        draw(canvas2,b=generateRandom())
        await sleep(150)
    }
    
    switch((a>b)-(a<b)){
        case 1:
            heading.innerText="Player A Wins"
            break;
        case -1:
            heading.innerText="Player B Wins"
            break;
        default:
            heading.innerText="Both Player Wins"
            break;
    }
});

function createCircle(canvas,centerX,centerY,radius){
    const ctx = canvas.getContext('2d');
    ctx.beginPath()
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX,centerY,radius,0,Math.PI*2)
    ctx.fill();
    ctx.stroke();
}

function clearCanvas(canvas){
    const ctx=canvas.getContext('2d')
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

function diagonal(canvas){
    createCircle(canvas,30,30,20)
    createCircle(canvas,170,170,20)
}
function center(canvas){
    createCircle(canvas,100,100,20)
}
function anti_diagonal(canvas){
    createCircle(canvas,30,170,20)
    createCircle(canvas,170,30,20)
}

function draw(canvas,num){
    clearCanvas(canvas)
    switch (num){
        case 1:
            center(canvas)
            break;
        case 2:
            diagonal(canvas)
            break;
        case 3:
            diagonal(canvas)
            center(canvas)
            break;
        case 4:
            diagonal(canvas)
            anti_diagonal(canvas)
        break;
        
        case 5:
            diagonal(canvas)
            anti_diagonal(canvas)
            center(canvas)
            break;
        case 6:
            diagonal(canvas)
            anti_diagonal(canvas)
            createCircle(canvas,30,100,20)
            createCircle(canvas,170,100,20)
        break;
    }
}

function generateRandom(){
    let z=-1;
    z=Math.floor((Math.random()*100)%6)+1;
    return z;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }