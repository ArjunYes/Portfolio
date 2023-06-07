console.log("Loaded");

let displayWord = document.getElementById("displayWord");
// console.log(displayWord.innerHTML)

letterArr = ["Programmer. ", "Noob.", "Mastermind."];

let i = 0;
let j = 0;
let displayWordX = [];

function loop() {


   if(i<letterArr.length){

    if(j<letterArr[i].length){
        console.log(letterArr[i][j]);
        displayWordX.push(letterArr[i][j])
        displayWord.innerText =  displayWordX.join("");
        j++;
    }

    else if(j == letterArr[i].length){
        debugger

        if(displayWordX.length){
            displayWordX.pop();
            displayWord.innerText =  displayWordX.join("");
        }else{

        displayWordX=[];
        j=0;
        i++;
        }

    }


   }

   if(i==letterArr.length){
    i=0;
   }


   setTimeout(loop,150)
}

loop()

