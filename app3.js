btn=document.querySelector("button");
head=document.querySelector("h1");
para=document.querySelector("#box2");
btn.addEventListener("click",function(){
    head.innerText=`rgb${get_random_color()}`;
    para.style.backgroundColor=`rgb${get_random_color()}`
    
})

function get_random_color(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let black=Math.floor(Math.random()*255);
    let color=`(${red},${green},${black})`;
    return color;
    
    
}