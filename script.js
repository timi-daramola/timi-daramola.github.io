let backgroundChanger = document.querySelector("body");
let backgroundValue = document.querySelector(".back-color");
let changer = document.querySelector(".clickable");
let light = document.querySelector('.light-icon');
let textInput = document.querySelector('.textInput');
let searchColor = document.querySelector('.clickable-2');

let hex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F'];


changer.addEventListener('click', function(){
    let hexCode = '#';
    let generateCodeLength;
    for(let i=0; i<6; i++){
        generateCodeLength = hex[loopThroughHex()];
        hexCode +=generateCodeLength;
    }
    document.body.style.backgroundColor = hexCode;
    backgroundValue.textContent = hexCode;

    bgColorChanger = true;
});



document.querySelector('.clickable-2').onclick = function(){
    let textOutput;
    textOutput = document.querySelector('.textInput').value;
    backgroundChanger.style.backgroundColor = textOutput;
}


function loopThroughHex(){
    let hexRandomNumber;
    for(let i=0; i<hex.length; i++){
       hexRandomNumber =  Math.floor(Math.random() * hex.length);
    }return hexRandomNumber;
}


