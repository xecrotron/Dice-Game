
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

function diagonal(){
    createCircle(canvas,30,30,20)
    createCircle(canvas,170,170,20)
}
function center(){
    createCircle(canvas,100,100,20)
}
function anti_diagonal(){
    createCircle(canvas,30,170,20)
    createCircle(canvas,170,30,20)
}
function draw(canvas,num){
    clearCanvas(canvas)
    switch (num){
        case 1:
            createCircle(canvas,100,100,20)
            break;
        case 2:
            createCircle(canvas,30,30,20)
            createCircle(canvas,170,170,20)
            break;
        case 3:
            createCircle(canvas,100,100,20)
            createCircle(canvas,30,30,20)
            createCircle(canvas,170,170,20)
            break;
        case 4:
            createCircle(canvas,30,30,20)
            createCircle(canvas,170,170,20)
            createCircle(canvas,30,170,20)
            createCircle(canvas,170,30,20)
        break;
        
        case 5:
            createCircle(canvas,100,100,20)
            createCircle(canvas,30,30,20)
            createCircle(canvas,170,170,20)
            createCircle(canvas,30,170,20)
            createCircle(canvas,170,30,20)
            break;
        case 6:
            createCircle(canvas,30,30,20)
            createCircle(canvas,170,170,20)
            createCircle(canvas,30,170,20)
            createCircle(canvas,170,30,20)
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

button = document.getElementById("button")
button.addEventListener('click',async () => {
    // const canvas = document.getElementById("canvas2");
    heading = document.getElementById('heading')
    heading.innerText="Dice Game";
    console.log("This is clicked");
    
    const canvas1=document.getElementById("canvas1")
    const canvas2=document.getElementById("canvas2")
    var j=0;
    var a=0,b=0;
    while(j<10){
        console.log("Working")
        draw(canvas1,a=generateRandom())
        draw(canvas2,b=generateRandom())
        await sleep(300)
        console.log(j)
        j++;
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

})

  
//   async function demo() {
//     setTimeout("alert('this alert is timedout and should be the first');", 5000);
//     // await sleep(5000);
//     alert('this should be the second one');
//   }
//   demo();