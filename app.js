/*-------------------------------- Constants --------------------------------*/
const numberButtons = document.querySelectorAll(".button.number")
const operatorButtons = document.querySelectorAll(".button.operator")
const equalsButton = document.querySelector(".button.equals")
const screen = document.querySelector(".display")
/*-------------------------------- Variables --------------------------------*/
let calcDisplay = ""
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", onNumberButtonClick)
})
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", onOperatorButtonClick)
})
equalsButton.addEventListener("click", onEqualsButtonClick)
/*-------------------------------- Functions --------------------------------*/
function onNumberButtonClick(event) {
    const element = event.target
    const numberString = element.innerHTML
    const number = +numberString
    calcDisplay += number
    onCalculationChange()
}
function onOperatorButtonClick(event) {
    const element = event.target
    const operatorString = element.innerHTML
    if(operatorString === "C") {
        calcDisplay = ""
    } else {
        calcDisplay += operatorString
    }
    onCalculationChange()
    
}
function onEqualsButtonClick(event) {
    const element = event.target
    const equalsString = element.innerHTML
    calcDisplay = eval(calcDisplay)
    onCalculationChange()
}
function onCalculationChange() {
    screen.innerHTML = calcDisplay
}
