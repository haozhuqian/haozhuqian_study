const curry = (fn, ...arg) => {
	if (arg.length >= fn.length) {
		return fn(...arg);
	} else {
		return (...arg2) => {
			return curry(fn, ...arg, ...arg2);
		};
	}
};
const add = (a, b, c) => a + b + c;
console.log(curry(add, 1, 2, 3));
console.log(curry(add)(1, 2)(3));
console.log(curry(add)(1)(2)(3));
