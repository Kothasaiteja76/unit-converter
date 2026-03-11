// Length Conversion

function convertLength(){

let value = document.getElementById("lengthValue").value
let from = document.getElementById("lengthFrom").value
let to = document.getElementById("lengthTo").value

let meters

const map = {
millimeter:0.001,
centimeter:0.01,
meter:1,
kilometer:1000,
inch:0.0254,
foot:0.3048,
yard:0.9144,
mile:1609.34
}

meters = value * map[from]
let result = meters / map[to]

document.getElementById("lengthResult").innerText = "Result: " + result
}



// Weight Conversion

function convertWeight(){

let value = document.getElementById("weightValue").value
let from = document.getElementById("weightFrom").value
let to = document.getElementById("weightTo").value

let grams

const map = {
milligram:0.001,
gram:1,
kilogram:1000,
ounce:28.3495,
pound:453.592
}

grams = value * map[from]
let result = grams / map[to]

document.getElementById("weightResult").innerText = "Result: " + result
}



// Temperature Conversion

function convertTemp(){

let value = Number(document.getElementById("tempValue").value)
let from = document.getElementById("tempFrom").value
let to = document.getElementById("tempTo").value

let result

if(from === "celsius" && to === "fahrenheit")
result = value * 9/5 + 32

else if(from === "fahrenheit" && to === "celsius")
result = (value - 32) * 5/9

else if(from === "celsius" && to === "kelvin")
result = value + 273.15

else if(from === "kelvin" && to === "celsius")
result = value - 273.15

else if(from === "fahrenheit" && to === "kelvin")
result = (value - 32) * 5/9 + 273.15

else if(from === "kelvin" && to === "fahrenheit")
result = (value - 273.15) * 9/5 + 32

else
result = value

document.getElementById("tempResult").innerText = "Result: " + result

}