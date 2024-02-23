
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
function draw(canvas,num){
    console.log("This is working")
    clearCanvas(canvas)
    console.log(num)
    // console.log(canvas)
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
    z=Math.floor((Math.random()*100)%6)
    if(z==0)z=6;
    return z;
}
button = document.getElementById("button")
button.addEventListener('click',() => {
    const canvas = document.getElementById("canvas2");
    console.log("This is clicked");
    
    draw(canvas,generateRandom())
})

window.addEventListener('onload',() => {
    canvas1=document.getElementById("canvas1")
    canvas2=docuemt.getElementById("canvas2")
    console.log("Getting Window Refresh")
    draw(canvas1,generateRandom())
    draw(canvas2.generateRandom())
})