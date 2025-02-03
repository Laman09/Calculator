/** 1.Change Text on Button Click
Add a <p> tag with some text.
 */
// function button(){
//     let p = document.createElement("p");
//     document.body.append(p);
//     p.textContent = "text";
// }

/** 2.Toggle Dark Mode
Add a button that switches between light and dark mode using CSS classes and JavaScript.
 */
// function toggleFunction(){
//     let circle = document.getElementById("toggleLamp");
//     circle.classList.toggle("toggleCircle");
// }

/** 3.Update Input Text in Real Time
Add an input field where users can type text.
 */
// function textInput(){
//     let text = document.getElementById("inputP");
//     inputP = text.value;
//     document.getElementById("p").innerHTML = inputP;
// }

/** 4. Make a calculator with html, css and js*/
function display(num) { 
    document.getElementById("result").value += num
} 

function calcFunction(event) { 
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3' 
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7' 
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-' 
        || event.key == '*' || event.key == '/') 
        document.getElementById("result").value += event.key; 
} 

let sum = document.getElementById("summ"); 
sum.onkeyup = function (event) { 
    if (event.keyCode === 13) { 
        console.log("Enter"); 
        let x = document.getElementById("result").value 
        console.log(x); 
        solve(); 
    } 
}
function solve() { 
    let x = document.getElementById("result").value 
    let y = math.evaluate(x) 
    document.getElementById("result").value = y 
} 

function clr() { 
    document.getElementById("result").value = "" 
} 