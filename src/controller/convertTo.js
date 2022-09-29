export function bin2dec(number, type) {
	let interger = 0
	let result = ""
	
	switch (type) {
		case "decimal":
		 	result = parseInt(number, 2).toString(10)
			break;
		case "octal":
			result =  parseInt(number, 2).toString(8)
			break;
		case "hex":
			result = parseInt(number, 2).toString(16).toUpperCase()
			break;
	}
	return result;
}
