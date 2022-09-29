export function bin2dec(number, type) {
	let interger = 0
	let result = ""
	
	switch (type) {
		case "decimal":
		 	result = parseInt(number).toString(2)
			break;
		case "octal":
			result =  parseInt(number).toString(2)
			break;
		case "hex":
			result = parseInt(number).toString(2)
			break;
	}
	return result;
}
