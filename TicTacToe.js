let boxes= document.querySelectorAll(".btn");
let reset=document.querySelector(".reset");
let x=document.getElementById("x");
let turn="X";
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const playerturn=(turn)=>{
     if(turn=="X"){
        x.textContent="Player O's turn";
     }
     else{
        x.textContent="Player X's turn";
     }
}
boxes.forEach((box)  =>  {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if (turn==="X"){
            box.textContent="X";
            playerturn(turn);
            turn="O";}
        else{
            box.textContent="O";
            playerturn(turn);
            turn="X";
        }
        box.disabled=true;
        checkWinner();
        if(checkWinner()){
           x.textContent="";
           boxes.forEach((box) => { 
           box.disabled=true;
    }); 
        }
    });

});
reset.addEventListener("click",()=>{
    boxes.forEach((box) => { 
        box.textContent="";
        box.disabled=false;
    });
    let para=document.querySelector(".winning-msg");
    para.textContent="";
    turn="X";
});
const checkWinner=() =>{
    for(let p of winpatterns){
        
        if(boxes[p[0]].innerText!="" && boxes[p[1]].innerText!="" && boxes[p[2]].innerText!=""){
           if(boxes[p[0]].innerText===boxes[p[1]].innerText && boxes[p[1]].innerText===boxes[p[2]].innerText){

            console.log("winner",boxes[p[0]].innerText);
            let para=document.querySelector(".winning-msg");
            para.textContent="Player "+boxes[p[0]].innerText+" won the Game 🎉!";
            return true;
           }
        }

    }  
    return false;
}