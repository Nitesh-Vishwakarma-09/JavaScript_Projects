const randomColor =function(){
    const hex='0123456789ABCDEF'
    let color='#'
    for(i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color
}
let IntervalID;
const StartChangingcolor= function(){
    if(!IntervalID){
        IntervalID=setInterval(changeBGColor,1000)
    }
    function changeBGColor(){
        document.body.style.backgroundColor=randomColor();
    }
};
const StopChangingColor=function(){
    clearInterval(IntervalID);
    IntervalID= null;
}
document.querySelector('#start').addEventListener('click',StartChangingcolor);
document.querySelector('#stop').addEventListener('click',StopChangingColor);