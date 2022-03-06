var canvas=document.getElementById("main");
var cContext=canvas.getContext("2d");

cContext.beginPath();
cContext.arc(100,100,5,0,2*Math.PI);
cContext.fill();

var drawing=false;

canvas.addEventListener("mousedown",function(e){
    drawing=true;
    canvas.style.cursor="pointer";
})

canvas.addEventListener("mouseup",function(e){
    drawing=false;
    canvas.style.cursor="unset";
})

canvas.addEventListener("mousemove",function(e){
if(drawing){
cContext.beginPath();
cContext.arc(e.pageX,e.pageY,5,0,2*Math.PI);
cContext.fill();
}
});
var x=document.getElementsByTagName("input")[0];
x.onchange=function(){
cContext.fillStyle = x.value;
console.log(x.value);
}