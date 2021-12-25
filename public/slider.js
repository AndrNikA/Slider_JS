var block1=document.querySelector('#slider_block1');
var block2=document.querySelector('#slider_block2');
var block3=document.querySelector('#slider_block3');

function funonload() {
    block1.classList.add("left");
    block2.classList.add("center");
    block3.classList.add("right");
} 
window.onload = funonload;

function left(){
    block1=document.querySelector(".left");
    block2=document.querySelector(".center");
    block3=document.querySelector(".right");
    block1.classList.remove("left");
    block1.classList.add("right");
    block2.classList.remove("center");
    block2.classList.add("left");
    block3.classList.remove("right");
    block3.classList.add("center");
}

function right(){
    block1=document.querySelector(".left");
    block2=document.querySelector(".center");
    block3=document.querySelector(".right");
    block1.classList.remove("left");
    block1.classList.add("center");
    block2.classList.remove("center");
    block2.classList.add("right");
    block3.classList.remove("right");
    block3.classList.add("left");
}