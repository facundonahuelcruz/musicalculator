const screen = document.querySelector(".screen")
const buttons = document.querySelectorAll(".calculator-button")

//clicks event listener
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const pressedButton = button.textContent

//clear button config
        if (button.id === "clear") {
            screen.textContent = "0"
            return
        }  

//delete button config
        if (button.id === "delete") {
            if (screen.textContent.length === 1 || screen.textContent === "Error.") {
                screen.textContent = "0"
            } else {
                screen.textContent = screen.textContent.slice(0, -1)
            }
            return
        }

//equal button config and adding "eval" function
        if (button.id === "equal") {
            try {
                screen.textContent = eval(screen.textContent)
            } catch {
                screen.textContent = "Error."
            }
            return
        }
        
//adding digits config
        if (screen.textContent === "0" || screen.textContent === "Error.") {
            screen.textContent = pressedButton
        } else {
            screen.textContent += pressedButton
        }
    })
})