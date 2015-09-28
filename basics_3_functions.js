// functions in javascript
// function to calculate the area of a square
var area = function(x){
	return x*x;
}
//function with no parameters
var noParam = function(){
	console.log("I am Not having any parameters");
}
//function with more than 1 parameters
var Param = function(l , b){
	var area = l*b;
	console.log("\n the area of the rectangle is" + area);
}
//understanding about the scope of the variables
var a="i m global"
var scope= function(){
	var a="i m local"
}
console.log("after all this \t" + a);
var scope2 = function(){
	a="i m local in Scope 2"
}
console.log(a);
//what happens to the scope if we do nesting of functions. let's see !!
var outer = function(){
	var a;
	var add = function(x,y){
		a=x+y;
	}
	var sub = function(x,y){
		a=x-y;
	}
	var mul = function(x,y){
		a=x*y;
	}
	var div = function(x,y){
		a=x/y;
	}
	add(5,7);
	console.log(a);
	sub(19,12);
	console.log(a);
	mul(10,20);
	console.log(a);
	div(100,5);
	console.log(a);
};
// checking the block functionality of javascript
var a="abc"
console.log(a);
{
	var a="pqr"
	console.log(a);
}
console.log(a);
// recursion 
var recu = function (base, power){
	if (power == 0)
		return 1;
	else
		return base * recu(base,power-1);
}
