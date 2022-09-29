import { 
	btnBinary, 
	btnCalc, 
	btnComplement, 
	convertDiv,
	calcDiv,
	numberConvert,
	convertedArea
} from './imports.js'

import {bin2dec} from './controller/convert.js'

btnBinary.addEventListener("click", (e) => {
  e.preventDefault();
	convertDiv.style.display = "flex";
	calcDiv.style.display = "none";
})

numberConvert.addEventListener('change', (e) => {
	e.preventDefault();
	const value = e.target.value
	convertedArea.innerHTML = `<span>${value}</span>`
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

