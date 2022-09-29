export function bin2dec(binary, type) {
	let result = 0
	let dec = 0

	switch (type) {
		case "decimal":
			result = parseInt(binary, 2)
			break;
		case "octal":
			dec = parseInt(binary, 2);
			result = dec.toString(8);
			break;
		case "hex":
			dec = parseInt(binary, 2);
			result = dec.toString(16).toLocaleUpperCase();
			break;
	}
	return result
}
