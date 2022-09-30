import {
  convertToDiv,
  btnFromBinary,
  convertDiv,
  calcDiv,
  numberConvert,
  convertedArea,
  optionConvert,
  complementDiv,
	textWelcome
} from '../imports.js'

import { bin2dec } from '../controller/convert.js'

// Binary Convert
let type = "decimal"

btnFromBinary.addEventListener("click", (e) => {
  e.preventDefault();
  convertDiv.style.display = "flex"
  convertToDiv.style.display = "none"
  calcDiv.style.display = "none"
  textWelcome.style.display = "none";
  complementDiv.style.display = "none"
})

numberConvert.addEventListener('change', (e) => {
  e.preventDefault();
  const bin = e.target.value
  const value = bin2dec(bin, type)
  convertedArea.innerHTML = `<span>${value}</span>`
});

optionConvert.addEventListener('change', (event) => {
  type = event.target.value
  const bin = numberConvert.value
  const value = bin2dec(bin, type)
  convertedArea.innerHTML = `<span>${value}</span>`
});
