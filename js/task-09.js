//https://www.codewars.com/kata/training-js-number-9-loop-statement-while-and-do-dot-while/train/javascript

function padIt(str, n) {
	let result = str;
	while ((n - 1) >= 0) {
		if ((n - 1) % 2 === 0) {
			result = '*' + result;
		}
		else {
			result += '*';
		}
		n--;
	}
	return result;
}