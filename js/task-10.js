//https://www.codewars.com/kata/training-js-number-10-loop-statement-for/train/javascript

function pickIt(arr) {
	let odd = [];
	let even = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 1) {
			odd.push(arr[i])
		}
		else {
			even.push(arr[i]);
		}
	}
	return [odd, even];
}