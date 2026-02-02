const colorboxes=document.querySelectorAll(".color-box");
const colordisplay=document.getElementById("colorDisplay");
const messagedisplay=document.getElementById("message");
const resetbutton=document.getElementById("resetBtn");


let color = [];
let pickedcolor="";

function randomcolor(){
    return Math.floor(Math.random()*256);
}

function generaterandomcolor(){
    return `rgb(${randomcolor()}, ${randomcolor()}, ${randomcolor()})`;
}

function generatecolor(num){
    const arr=[];
    for(let i=0; i<num; i++){
        arr.push(generaterandomcolor());
    }
    return arr;

}


function pickcolor(){
    const randomindex = Math.floor(Math.random()* color.length);
    return color[randomindex];
}


function setupgame(){
    color = generatecolor(6);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    messagedisplay.textContent = "";
    resetbutton.textContent = "New Colors";

    colorboxes.forEach((box, index) => {
        box.style.backgroundColor = color[index];
        box.addEventListener("click", function(){
            const clickedcolor = this.style.backgroundColor;
            if(clickedcolor === pickedcolor){
                messagedisplay.textContent = "Correct!";
                resetbutton.textContent = "Play Again?";
                changecolors(pickedcolor);
            } else {
                this.style.backgroundColor = "#232323";
                messagedisplay.textContent = "Try Again";
            }
        });
    }); 
}

function changecolors(color){
    colorboxes.forEach(box => {
        box.style.backgroundColor = color;
    });
}           

resetbutton.addEventListener("click", function(){
    setupgame();
});

setupgame();