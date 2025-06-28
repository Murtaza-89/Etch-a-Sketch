let title = document.createElement("h1")
document.body.appendChild(title)
title.style.textAlign = "center"
title.style.marginTop = "30px"
title.textContent = "Etch-a-sketch"

document.body.style.background = "linear-gradient(to right, rgb(0, 4, 255),rgb(247, 8, 207))"

let div = document.createElement("div")
document.body.appendChild(div)
div.style.display = "flex"
div.style.justifyContent = "center"
div.style.gap = "50px"



let mainDiv = document.createElement("div")
div.appendChild(mainDiv)
mainDiv.style.width = "480px"
mainDiv.style.height = "480px"
mainDiv.style.display = "flex"
mainDiv.style.flexWrap = "wrap"
mainDiv.style.marginTop = "25px"
mainDiv.style.border = "3px solid black"

let mouseDrag = false

mainDiv.addEventListener("mousedown", ()=> {
    mouseDrag = true
})

mainDiv.addEventListener("mouseup", (event)=> {
    mouseDrag = false
})




    




optionsDiv = document.createElement("div")
div.appendChild(optionsDiv)
optionsDiv.style.display = "flex"
optionsDiv.style.width = "300px"
optionsDiv.style.marginTop = "25px"
optionsDiv.style.flexDirection = "row"

let options = document.createElement("div")
optionsDiv.appendChild(options)
options.style.display = "flex"
options.style.height = "480px"
options.style.width = "150px"
options.style.alignItems = "center"
options.style.flexWrap = "wrap"
options.style.border = "none"
options.style.borderRadius = "10px"
options.style.boxShadow = " 15px 20px 30px rgb(0, 0, 0)"
options.style.flexDirection = "column"

let drawingMode = document.createElement("div")
options.appendChild(drawingMode)
drawingMode.style.height = "33%"
drawingMode.style.width = "100%"
drawingMode.style.display = "flex"
drawingMode.style.flexWrap = "wrap"
drawingMode.style.justifyContent = "space-evenly"
drawingMode.style.marginTop = "2px"
drawingMode.style.flexDirection = "column"


let drawOptionsContainer = document.createElement("div")
options.appendChild(drawOptionsContainer)
drawOptionsContainer.style.display = "flex"
drawOptionsContainer.style.height = "40px"
drawOptionsContainer.style.width = "100%"
drawOptionsContainer.style.flexDirection = "column"

drawingModetitles = document.createElement("div")
drawOptionsContainer.appendChild(drawingModetitles)
drawingModetitles.style.display = "flex"
drawingModetitles.style.width = "100%"
drawingModetitles.style.height = "50%"
drawingModetitles.style.flexDirection = "row"
drawingModetitles.style.justifyContent = "space-evenly"
drawingModetitles.style.gap = "20px"
drawingModetitles.style.boxSizing = "border-box"

drawingModeButtons = document.createElement("div")
drawOptionsContainer.appendChild(drawingModeButtons)
drawingModeButtons.style.display = "flex"
drawingModeButtons.style.width = "100%"
drawingModeButtons.style.height = "50%"
drawingModeButtons.style.flexDirection = "row"
drawingModeButtons.style.justifyContent = "space-evenly"
drawingModeButtons.style.gap = "20px"
drawingModeButtons.style.boxSizing = "border-box"



let resolutionDiv = document.createElement("div")
options.appendChild(resolutionDiv)
resolutionDiv.style.display = "flex"
resolutionDiv.style.flexDirection = "column"
resolutionDiv.style.alignItems = "center"
resolutionDiv.style.gap = "5px"

let resButtonContainer = document.createElement("div")
resolutionDiv.appendChild(resButtonContainer)
resButtonContainer.style.display = "flex"
resButtonContainer.style.gap = "60px"
resButtonContainer.style.justifyContent = "center"
resButtonContainer.alignItems = "center"



let minusButton = document.createElement("button")
resButtonContainer.appendChild(minusButton)
minusButton.style.height = "15px"
minusButton.style.width = "15px"
minusButton.style.border = "none"
minusButton.style.borderRadius = "5px"
minusButton.style.backgroundColor = "black"
minusButton.style.color = "white"
minusButton.textContent = "-"
minusButton.style.transform = "translateY(55px)"


minusButton.addEventListener("click", ()=> {
    resolution.value--
})

let resolutionLabel = document.createElement("label")
resolutionDiv.appendChild(resolutionLabel)
resolutionLabel.textContent = "Grid Resolution"
resolutionLabel.style.fontWeight = "bold"

let resolution = document.createElement("input")
resolutionDiv.appendChild(resolution)
resolution.type = "number"
resolution.style.width = "50px"
resolution.style.height = "25px"
resolution.min = "8"
resolution.max = "100"
resolution.value = "32"

let plusButton = document.createElement("button")
resButtonContainer.appendChild(plusButton)
plusButton.style.height = "15px"
plusButton.style.width = "15px"
plusButton.style.border = "none"
plusButton.style.borderRadius = "5px"
plusButton.style.backgroundColor = "black"
plusButton.style.color = "white"
plusButton.textContent = "+"
plusButton.style.transform = "translateY(55px)"



plusButton.addEventListener("click", ()=> {
    resolution.value++
})


let colorPickerDiv = document.createElement("div")
options.appendChild(colorPickerDiv)
colorPickerDiv.style.display = "flex"
colorPickerDiv.style.flexDirection = "column"
colorPickerDiv.style.alignItems = "center"
colorPickerDiv.style.gap = "5px"
colorPickerDiv.style.marginTop = "20px"

let colorPickerLabel = document.createElement("label")
colorPickerDiv.appendChild(colorPickerLabel)
colorPickerLabel.textContent = "Color Picker"
colorPickerLabel.style.fontWeight = "bold"

let colorPicker = document.createElement("input")
colorPicker.type = "color"
colorPicker.value = "#000000"
colorPickerDiv.appendChild(colorPicker)
colorPicker.style.border = "none"
colorPicker.style.height = "30px"

document.addEventListener("keydown", (event) => {
    key = event.key
    if (key === "Enter") {
        destroy()
        let resValue = parseInt(resolution.value)
        if (resValue < 8) {resValue = 8}
        if (resValue > 64) {resValue = 64}
        
        for(i=0; i < resValue*resValue; i++) {
            let innerDivs = document.createElement("div")
            mainDiv.appendChild(innerDivs)
            innerDivs.style.height = (480/resValue) + "px"
            innerDivs.style.width = (480/resValue) + "px"
            innerDivs.style.border = "1px solid rgba(182, 181, 181, 0.9)"
            innerDivs.style.boxSizing = "border-box"
            innerDivs.style.transition = "background-color 0.4s ease"
            innerDivs.style.background = "white"
            innerDivs.addEventListener("mousemove" ,(event) => {
                if (rainbowColor.checked) {
                    randomNumber = Math.floor(Math.random() * 7) + 1
                    if (randomNumber === 1) {
                        colorPicker.value = "#FF0D72"
                    }
                    else if (randomNumber === 2){
                        colorPicker.value = "#FF0D0D"
                    }
                    else if (randomNumber === 3) {
                        colorPicker.value = "#FF8C0D"
                    }
                    else if (randomNumber === 4) {
                        colorPicker.value = "#FFEE0D"
                    }
                    else if(randomNumber === 5) {
                        colorPicker.value = "#0DFF72"
                    } 
                    else if(randomNumber === 6) {
                        colorPicker.value = "#0D8CFF"
                    }
                    else {
                        colorPicker.value = "#8C0dFF"
                    }
                    
                }
                if (customColor.checked) {
                    colorPicker.value = colorPicker.value
                }
                if (eraser.checked) {
                    colorPicker.value = "#FFFFFF"
                }
                if (dragOption.checked && mouseDrag === true) {
                    event.target.style.backgroundColor = colorPicker.value
                }
                else if (hoverOption.checked) {
                    event.target.style.backgroundColor = colorPicker.value
                }
                
  
             })
            divs.push(innerDivs)
        }
    }
})

function destroy(){
    divs.forEach(divs => {
        divs.remove()
    })
}

let divs = []
for (i=0; i < 1024; i++) {
    let innerDivs = document.createElement("div")
    mainDiv.appendChild(innerDivs)
    innerDivs.style.height = "15px"
    innerDivs.style.width = "15px"
    innerDivs.style.border = "1px solid rgba(182, 182, 182, 0.9)"
    innerDivs.style.boxSizing = "border-box"
    innerDivs.style.transition = "background-color 0.4s ease"
    innerDivs.style.background = "white"
    innerDivs.addEventListener("mousemove" ,(event) => {
        if (rainbowColor.checked) {
            randomNumber = Math.floor(Math.random() * 7) + 1
            if (randomNumber === 1) {
                colorPicker.value = "#FF0D72"
            }
            else if (randomNumber === 2){
                colorPicker.value = "#FF0D0D"
            }
            else if (randomNumber === 3) {
                colorPicker.value = "#FF8C0D"
            }
            else if (randomNumber === 4) {
                colorPicker.value = "#FFEE0D"
            }
            else if(randomNumber === 5) {
                colorPicker.value = "#0DFF72"
            } 
            else if(randomNumber === 6) {
                colorPicker.value = "#0D8CFF"
            }
            else {
                colorPicker.value = "#8C0dFF"
            }

        }
        if (customColor.checked) {
            colorPicker.value = colorPicker.value
        }
        if (eraser.checked) {
            colorPicker.value = "#FFFFFF"
        }
        if (dragOption.checked && mouseDrag === true) {
            event.target.style.backgroundColor = colorPicker.value
        }
        else if (hoverOption.checked) {
            event.target.style.backgroundColor = colorPicker.value

        }
    })
    divs.push(innerDivs)
}

function Clear() {
    divs.forEach(div =>{
         div.style.backgroundColor = "White"
    })
}

let resetButton = document.createElement("button")
options.appendChild(resetButton)
resetButton.style.border = "none"
resetButton.style.borderRadius = "30px"
resetButton.style.cursor = "pointer"
resetButton.textContent = "Clear"
resetButton.style.height = "30px"
resetButton.style.width = "50px"
resetButton.style.color = "white"
resetButton.style.background = "black"
resetButton.style.transition = "height 0.4s ease, width 0.4s ease, box-shadow 0.4s ease"
resetButton.style.marginTop = "20px"

resetButton.addEventListener("click" , Clear)

resetButton.addEventListener("mouseover", ()=> {
    resetButton.style.height = "35px"
    resetButton.style.width = "57px"
    resetButton.style.boxShadow = "5px 5px 8px black"
})

resetButton.addEventListener("mouseout", ()=> {
    resetButton.style.height = "30px"
resetButton.style.width = "50px"
resetButton.style.boxShadow = "0px 0px 0px black"

})

let rainbowDiv = document.createElement("div")
drawingMode.appendChild(rainbowDiv)
rainbowDiv.style.display = "flex"
rainbowDiv.style.flexDirection = "row"
rainbowDiv.style.flexWrap = "wrap"
rainbowDiv.style.height = "2px"
rainbowDiv.style.width = "100%"
rainbowDiv.style.justifyContent = "space-evenly"

let rainbowName = document.createElement("p")
rainbowDiv.appendChild(rainbowName)
rainbowName.style.display = "inline-block"
rainbowName.textContent = "Rainbow color"
rainbowName.style.fontWeight = "bold"

let rainbowColor = document.createElement("input")
rainbowDiv.appendChild(rainbowColor)
rainbowColor.type = "radio"
rainbowColor.name = "mode"
rainbowColor.style.width = "15px"
rainbowColor.style.height = "15px"

let customColorDiv = document.createElement("div")
drawingMode.appendChild(customColorDiv)
customColorDiv.style.display = "flex"
customColorDiv.style.flexDirection = "row"
customColorDiv.style.flexWrap = "wrap"
customColorDiv.style.height = "2px"
customColorDiv.style.width = "100%"
customColorDiv.style.justifyContent = "space-evenly"
customColorDiv.style.gap = "4px"

let customcolorName = document.createElement("p")
customColorDiv.appendChild(customcolorName)
customcolorName.style.display = "inline-block"
customcolorName.textContent = "Custom color"
customcolorName.style.fontWeight = "bold"


let customColor = document.createElement("input")
customColorDiv.appendChild(customColor)
customColor.type = "radio"
customColor.name = "mode"
customColor.checked = "true"
customColor.style.width = "15px"
customColor.style.height = "15px"

let eraserDiv = document.createElement("div")
drawingMode.appendChild(eraserDiv)
eraserDiv.style.flexDirection = "row"
eraserDiv.style.flexWrap = "wrap"
eraserDiv.style.display = "flex"
eraserDiv.style.height = "2px"
eraserDiv.style.width = "100%"
eraserDiv.style.justifyContent = "space-evenly"
eraserDiv.style.gap = "54px"

let eraserName = document.createElement("p")
eraserDiv.appendChild(eraserName)
eraserName.style.display = "inline-block"
eraserName.textContent = "Eraser"
eraserName.style.fontWeight = "bold"



let eraser = document.createElement("input")
eraserDiv.appendChild(eraser)
eraser.type = "radio"
eraser.name = "mode"
eraser.style.width = "15px"
eraser.style.height = "15px"

let resolutionSlider = document.createElement("input")
resolutionDiv.appendChild(resolutionSlider)
resolutionSlider.type = "range"
resolutionSlider.min = 8
resolutionSlider.max = 100
resolutionSlider.value = 32
resolutionSlider.style.width = "80px"
resolutionSlider.addEventListener("input", ()=> {
    resolution.value = resolutionSlider.value
})

let dragOption = document.createElement("input")
drawingModeButtons.appendChild(dragOption)
dragOption.type = "radio"
dragOption.name = "drawingSelector"
dragOption.style.height = "15px"
dragOption.style.width = "15px"







let dragOptionName = document.createElement("p")
drawingModetitles.appendChild(dragOptionName)
dragOptionName.textContent = "Drag"
dragOptionName.style.fontWeight = "bold" 



let hoverOptionName = document.createElement("p")
drawingModetitles.appendChild(hoverOptionName)
hoverOptionName.textContent = "hover"
hoverOptionName.style.fontWeight = "bold"


let hoverOption = document.createElement("input")
drawingModeButtons.appendChild(hoverOption)
hoverOption.type = "radio"
hoverOption.checked = "true"
hoverOption.name = "drawingSelector"
hoverOption.style.height = "15px"
hoverOption.style.width = "15px"



