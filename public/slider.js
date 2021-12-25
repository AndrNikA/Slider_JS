let slider=document.querySelector(".slider");
slider.addEventListener("click",function(event){ //События клика внутри блока калькулятора
	let el=event.target;
    if (el.classList.contains('left')) sliderLeft();
    else if (el.classList.contains('right')) sliderRight();
});

function sliderLeft(){
    let block1=document.querySelector(".left");
    let block2=document.querySelector(".center");
    let block3=document.querySelector(".right");
    block1.classList.remove("left");
    block1.classList.add("right");
    block2.classList.remove("center");
    block2.classList.add("left");
    block3.classList.remove("right");
    block3.classList.add("center");
}

function sliderRight(){
    let block1=document.querySelector(".left");
    let block2=document.querySelector(".center");
    let block3=document.querySelector(".right");
    block1.classList.remove("left");
    block1.classList.add("center");
    block2.classList.remove("center");
    block2.classList.add("right");
    block3.classList.remove("right");
    block3.classList.add("left");
}

