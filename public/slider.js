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
let nav="";

window.onload = function () {
    let textcode="";
    len=image.length-1;
    sr=Math.ceil(len/2);
    left=sr-1;
    right=sr+1;
    for(let i=0;i<=len;i++) textcode+='<div class="slider_nav_b" id="sliderNav_'+i+'"></div>';
    document.querySelector(".slider_nav").innerHTML=textcode;
    nav=document.querySelectorAll(".slider_nav_b");
    sliderSrc();
};

let slider=document.querySelector(".slider");
slider.addEventListener("click",function(event){ 
	let el=event.target;
    if (el.classList.contains('left')) sliderLeft();
    else if (el.classList.contains('right')) sliderRight();
});

let sliderNav=document.querySelector(".slider_nav");
sliderNav.addEventListener("click",function(event){ 
    if (event.target.classList.contains('slider_nav_b')){
        let id=event.target.id;
        let idz=id.length+1;
        let num="";
        for(let i=0;i<id.length;i++){
            if(id[i]==="_") idz=i;
            else if(i>idz) num+=id[i];
        }
        nav[sr].classList.remove("slider_nav_b_hover"); 
        num=parseInt(num);
        if (sr<num){
            sr=num;
            if (sr==len) right=0;
            else right=sr+1;
            if (sr==0) left=len;
            else left=sr-1;
            sliderAnimationLeft();
            sliderSrc();
        }
        if (sr>num){ 
            sr=num;
            if (sr==0) left=len;
            else left=sr-1;
            if (sr==len) right=0;
            else right=sr+1;
            sliderAnimationRight();
            sliderSrc();
        }
    }
});

function sliderLeft(){ //Перемещение в лево
    sliderAnimationRight();
    if (sr==0) sr=len;
    else sr-=1;
    if (sr==0) left=len;
    else left=sr-1;
    if (sr==len) right=0;
    else right=sr+1;
    sliderSrc();
}

function sliderRight(){ //Перемещение в право
    sliderAnimationLeft();
    if (sr==len) sr=0;
    else sr+=1;
    if (sr==len) right=0;
    else right=sr+1;
    if (sr==0) left=len;
    else left=sr-1;
    sliderSrc();
}

function sliderAnimationLeft(){
    let block1=document.querySelector(".left");
    let block2=document.querySelector(".center");
    let block3=document.querySelector(".right");
    block1.classList.remove("left");
    block1.classList.add("right");
    block2.classList.remove("center");
    block2.classList.add("left");
    block3.classList.remove("right");
    block3.classList.add("center");
    nav[sr].classList.remove("slider_nav_b_hover");
}

function sliderAnimationRight(){
    let block1=document.querySelector(".left");
    let block2=document.querySelector(".center");
    let block3=document.querySelector(".right");
    block1.classList.remove("left");
    block1.classList.add("center");
    block2.classList.remove("center");
    block2.classList.add("right");
    block3.classList.remove("right");
    block3.classList.add("left");
    nav[sr].classList.remove("slider_nav_b_hover");
}

function sliderSrc(){
    nav[sr].classList.add("slider_nav_b_hover");
    document.querySelector(".left").src=image[left];
    document.querySelector(".center").src=image[sr];
    document.querySelector(".right").src=image[right];
}

