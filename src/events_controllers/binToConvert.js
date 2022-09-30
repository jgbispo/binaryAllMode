import {
	convertDiv,
	convertToDiv,
	calcDiv,
	btnToBinary,
	numberToConvert,
	convertedToArea,
	optionToConvert,
	textWelcome
} from '../imports.js'

import { bin2dec } from '../controller/convertTo.js'

// Binary to Convert
let type = "decimal"

btnToBinary.addEventListener("click", (e) => {
	e.preventDefault();
	convertToDiv.style.display = "flex";
  textWelcome.style.display = "none";
	calcDiv.style.display = "none";
	convertDiv.style.display = "none";
})

numberToConvert.addEventListener('change', (e) => {
	e.preventDefault();
	const bin = e.target.value
	const value = bin2dec(bin, type)
	convertedToArea.innerHTML = `<span>${value}</span>`
});

optionToConvert.addEventListener('change', (event) => {
	type = event.target.value
	const bin = numberToConvert.value
	const value = bin2dec(bin, type)
	convertedToArea.innerHTML = `<span>${value}</span>` 
});
