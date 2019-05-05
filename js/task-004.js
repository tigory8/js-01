//task-004    https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

function buildFun(n) {
	var res = [];
	for (let i = 0; i < n; i++) {
		res.push(function() {
			console.log(i);
			return i;
		})
	}
	return res;
}