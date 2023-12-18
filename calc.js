const Solve = (char) =>{
    let display = document.getElementById("display") ; 
    display.value += char ; 
    var audio = new Audio("ohmjadu.mp3");
    audio.play();
}

const Clear = () => {
    document.getElementById("display").value = ""; 
    document.getElementById("error").innerHTML = "" ; 
}
const Backspace = (char) => {
    let display = document.getElementById("display") ; 
    display.value = display.value.slice(0,-1) ; 
}
const Result = () => {
    let display = document.getElementById("display") ; 
    let expression = display.value ; 
    
    // alert(expression) ; 
    try{
        display.value = eval(expression) ;
    }catch(err){
        // document.getElementById("error").innerText = "Invalid Expression"
        // display.value = "" ; 
        let text = `Error! ${expression} is not a valid expression` ; 
        document.getElementById("error").innerText = text ; 
    }
}
