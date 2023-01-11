let user={
    name:"Arun",
    chips:0,
};
let hasstarted=true;
let hasblack=false;
let sum=0;
let cardss=[];
let msg="";
let isalive=false;
let c1=document.getElementById("msg1");
let c2=document.getElementById("msg2");
let cards=document.getElementById("m");
let playerel=document.getElementById("player");
playerel.textContent=user.name+" : "+user.chips;
function getrandomcard(){
    let d = Math.floor(Math.random()*13)+1;
    if(d==1){
        d=11; 
    }
    else if(d>=11){
        d=10

    }
    return d;

}
function rendergame(){
if(sum==21){
    msg="CONGRATS";
    hasblack=true;
    isalive=false;
    user.chips+=10;
    playerel.textContent=user.name+" : "+user.chips;
}
else if(sum<21){
    msg="TRY ONCE AGAIN";
    hasblack=false;
    isalive=true;

   
    
} 
else{
    msg="YOU LOST";
    hasblack=false;
    isalive=false;
    user.chips-=10;
    playerel.textContent=user.name+" : "+user.chips;
}
m.textContent=msg;
c1.textContent="Cards: ";
for(let i=0;i<cardss.length;i++){
    c1.textContent+=cardss[i]+" ";
}
c2.textContent="Sum:"+sum;
}
function findcard(){
    if(isalive==true && hasblack==false)
    {
    let thirdcard=getrandomcard();
    cardss.push(thirdcard);
    sum+=thirdcard;
    rendergame();
}

}
function startgame(){
    user.chips=0;
    if(hasstarted==true)
    {
    let firstcard=getrandomcard();
    let secondcard=getrandomcard();
    cardss.push(firstcard);
    cardss.push(secondcard);
    sum+=firstcard;
    sum+=secondcard;
    rendergame();
}
    hasstarted=false;
}