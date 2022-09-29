export function calc(binary_one, binary_two, type) {
	let result = 0
	let dec_one = parseInt(binary_one, 2)
	let dec_two = parseInt(binary_two, 2)
	
	switch (type) {
		case "sum":
			result = dec_one + dec_two
			break;
		case "sub":
			result = dec_one - dec_two
			break;
		case "div":
			result = dec_one / dec_two
			break;
		case "mult":
			result = dec_one * dec_two
			break;
	}
	return result.toString(2)
}
