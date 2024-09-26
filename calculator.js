const controlsEl = document.getElementById("controls");

const buttonCaps = [
    7,8,9,"DEL",
    4,5,6,"+",
    1,2,3,"-",
    ".",0,"/","x",
    "RESET","="]

buttonCaps.forEach(buttonCap => {
    let button = document.createElement("button")
    button.innerText = buttonCap
    controlsEl.appendChild(button)
})