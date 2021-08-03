// const paper=document.querySelector('.paper');
// const stone=document.querySelector('.stone');
// const shears=document.querySelector('.shears');
const play=document.querySelectorAll('.play');
const btn=document.querySelectorAll('.button')
const youItem=document.querySelector(".you-item")
const computerItem=document.querySelector(".computer-item")
const win=document.querySelector('.win')
let player;
let computer;

btn.forEach((x)=>{
x.addEventListener('click',()=>{
    player=x.value;
    console.log(player);
    min=1;
    max=Math.floor(3);
switch(Math.floor(Math.random()*(max-min+1))+min){
    case 1: computer="paper"; break;
    case 2: computer="stone";break;
    case 3: computer="shears";break;
}
youItem.innerHTML="You: "+player;
computerItem.innerHTML="Computer: "+computer;

if(player==="paper" && computer==="stone" || player==="stone" && computer==="shears" || player==="shears" && computer==="paper")
{
    win.innerHTML="You Win"
}
else if(player===computer){
     win.innerHTML="Remis"
}
else {
    win.innerHTML="Computer Win"
}
})
})