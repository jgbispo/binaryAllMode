export function bin2dec(number, type) {
	let dec = 0
	let result = ""

	switch (type) {
		case "decimal":
			result = parseInt(number).toString(2)
			break;
		case "octal":
			dec = parseInt((number).toString(2), 8)
			result = parseInt(dec.toString(2))
			break;
		case "hex":
			dec = parseInt((number).toString(2), 16)
			result = parseInt(dec.toString(2))
			break;
	}
	return result;
}

