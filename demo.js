console.log("Jay Swaminrayan");

console.log("Fisrt hoisting program");

console.log("Accessing x before initializing it : " + x);

function a(){
	console.log("x inside a : " + x);
	console.log("putting y to test closure" + y);
	b();
	function b(){
		console.log("x inside b : "+x);
		console.log("y inside b : "+y);
	}
}

var x = 10;
a();
