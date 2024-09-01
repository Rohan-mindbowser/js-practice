const myFunc = () => {
	return new Promise((res, rej) => {
		res(2);
	});
}

myFunc()
	.then(res => {
		console.log(res);
		return res * 2;
	})
	.then(res => {
		console.log(res);
		return res * 2;
	})
	.finally(() => {
		console.log("Finally block");
	})
	.then(res => {
		console.log(res);
	});