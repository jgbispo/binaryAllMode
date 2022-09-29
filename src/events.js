import {
	btnBinary,
	btnCalc,
	btnComplement,
	convertDiv,
	calcDiv,
	numberConvert,
	convertedArea,
	optionConvert
} from './imports.js'

import { bin2dec } from './controller/convert.js'

// Binary Convert

let type = "decimal"

btnBinary.addEventListener("click", (e) => {
	e.preventDefault();
	convertDiv.style.display = "flex";
	calcDiv.style.display = "none";
})

numberConvert.addEventListener('change', (e) => {
	e.preventDefault();
	const bin = e.target.value
	const value = bin2dec(bin, type)
	convertedArea.innerHTML = `<span>${value}</span>`
});

optionConvert.addEventListener('change', (event) => {
	type = event.target.value
	numberConvert.value = ""
	convertedArea.innerHTML = ""
});

btnCalc.addEventListener("click", (e) => {
	e.preventDefault();
	calcDiv.style.display = "flex";
	convertDiv.style.display = "none";
})

btnComplement.addEventListener("click", (e) => {
	e.preventDefault();
	alert("Em Desenvolvimento")
})

