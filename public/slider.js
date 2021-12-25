let image=[
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
];
let left=0;
let sr=0;
let right=0;
let len=0;

window.onload = function () {
    len=image.length-1;
    sr=Math.ceil(len/2);
    document.querySelector(".left").src=image[sr-1];
    document.querySelector(".center").src=image[sr];
    document.querySelector(".right").src=image[sr+1];
};

let slider=document.querySelector(".slider");
slider.addEventListener("click",function(event){ //События клика внутри блока слайдера
	let el=event.target;
    if (el.classList.contains('left')) sliderLeft();
    else if (el.classList.contains('right')) sliderRight();
});

function sliderLeft(){ //Перемещение в лево
    let block1=document.querySelector(".left");
    let block2=document.querySelector(".center");
    let block3=document.querySelector(".right");
    block1.classList.remove("left");
    block1.classList.add("right");
    block2.classList.remove("center");
    block2.classList.add("left");
    block3.classList.remove("right");
    block3.classList.add("center");
    if (sr==len) sr=0;
    else sr+=1;
    if (sr==len) right=0;
    else right=sr+1;
    if (sr==0) left=len;
    else left=sr-1;
    sliderSrc();
}

function sliderRight(){ //Перемещение в право
    let block1=document.querySelector(".left");
    let block2=document.querySelector(".center");
    let block3=document.querySelector(".right");
    block1.classList.remove("left");
    block1.classList.add("center");
    block2.classList.remove("center");
    block2.classList.add("right");
    block3.classList.remove("right");
    block3.classList.add("left");
    if (sr==0) sr=len;
    else sr-=1;
    if (sr==0) left=len;
    else left=sr-1;
    if (sr==len) right=0;
    else right=sr+1;
    sliderSrc();
}

function sliderSrc(){
    document.querySelector(".left").src=image[left];
    document.querySelector(".center").src=image[sr];
    document.querySelector(".right").src=image[right];
}

