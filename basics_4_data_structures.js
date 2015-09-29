// data structures in Javascript
var arr = [2,4,6,85,3,7,1];
var a="javascript";
var arr1=[];
var c="ABCED";
console.log(a.toUpperCase());
console.log(arr1);
arr1.push("adding");
console.log("\n" + arr1);
arr1.push("the","values","dynamically","using","push");
console.log("\n"+arr1);
console.log(c.toLowerCase());
console.log(arr1.join(""));
console.log(arr1.pop());

var arr2 = {
	name : ["ram","shyam","max","ben"],
	value : [5,6,3,23],
	flag: false,
};
console.log(arr2);
console.log(arr2.name);
console.log(arr2.name[2]);
console.log(arr2.flag);
console.log(arr2.value);
delete arr2.flag ;
console.log(arr2.flag);

console.log("value" in arr2);
console.log("flag" in arr2);

