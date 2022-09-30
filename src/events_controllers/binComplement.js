import {
  complementDiv,
  convertDiv,
  calcDiv,
  btnComplement,
  numberComplement,
  convertToDiv,
  complementOne,
  complementTwo
} from '../imports.js'

import { complementBinaryForOne, complementBinaryForTwo } from '../controller/complement'

btnComplement.addEventListener("click", (e) => {
  e.preventDefault();
  complementDiv.style.display = "flex"
  convertToDiv.style.display = "none"
  calcDiv.style.display = "none"
  convertDiv.style.display = "none"
})

numberComplement.addEventListener('change', (e) => {
  e.preventDefault();
  const number = e.target.value
  const complementForOne = complementBinaryForOne(number)
  const complementForTwo = complementBinaryForTwo(number)
  complementOne.innerHTML = `<p>Complement for one: ${complementForOne}</p>`
  complementTwo.innerHTML = `<p>Complement for two: ${complementForTwo}</p>`
})
