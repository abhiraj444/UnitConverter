/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const btn = document.querySelector("button")
let inputEl = document.querySelector("input")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")
btn.addEventListener("click", function(){
    const val = Number(inputEl.value)
    lengthEl.textContent=`${val} meters = ${(val*3.281).toFixed(3)} feet | ${val} feet = ${(val/3.281).toFixed(3)} meters`
    volumeEl.textContent=`${val} litres = ${(val*0.264).toFixed(3)} gallons | ${val} litres = ${(val/0.264).toFixed(3)} gallons`
    massEl.textContent=`${val} kilos = ${(val*2.204).toFixed(3)} pounds | ${val} pounds = ${(val/2.204).toFixed(3)} kilos`
    // console.log(inputEl.value)
    inputEl.value=""
})