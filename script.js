import './src/events.js'
import {
	convertDiv,
	calcDiv,
	convertToDiv,
	complementDiv,
	titleAll,
	textWelcome
} from './src/imports.js'

complementDiv.style.display = "none"
convertDiv.style.display = "none"
convertToDiv.style.display = "none"
calcDiv.style.display = "none"

titleAll.addEventListener("click", (e) => {
	complementDiv.style.display = "none"
	convertDiv.style.display = "none"
	convertToDiv.style.display = "none"
	calcDiv.style.display = "none"
	textWelcome.style.display = "flex"
})