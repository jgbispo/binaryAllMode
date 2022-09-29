import {
	btnCalc,
	btnComplement,
	convertDiv,
	calcDiv,
	numberOneCalc,
	numberTwoCalc,
	optionCalc,
	calcArea,
} from '../imports.js'

import { calc } from '../controller/calc.js'

let type = "sum"

btnCalc.addEventListener("click", (e) => {
	e.preventDefault();
	calcDiv.style.display = "flex";
	convertDiv.style.display = "none";
})

numberOneCalc.addEventListener('change', (e) => {
	e.preventDefault();
	const numberOne = e.target.value
	const numberTwo = numberTwoCalc.value || 0
	const value = calc(numberOne, numberTwo, type)
	calcArea.innerHTML = `<span>${value}</span>`
});

numberTwoCalc.addEventListener('change', (e) => {
	e.preventDefault();
	console.log(type)
	const numberTwo = e.target.value
	const numberOne = numberOneCalc.value || 0
	const value = calc(numberOne, numberTwo, type)
	calcArea.innerHTML = `<span>${value}</span>`
});

optionCalc.addEventListener('change', (event) => {
	type = event.target.value
	const numberOne = numberOneCalc.value || 0
	const numberTwo = numberTwoCalc.value || 0
	const value = calc(numberOne, numberTwo, type)
	calcArea.innerHTML = `<span>${value}</span>`
});