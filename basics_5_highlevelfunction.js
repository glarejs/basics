console.log(sum(range(1,50)));
var a=0;
var i=0;
while(i <= 10)
{
	a +=i;
	i++;
}
console.log("the sum of the following is \n " + a);


var sum=0,range,i;

i = prompt("please enter the start of the range");
console.log(i);
if(i == NaN){
	alert("you have entered a invalid number");
}
else
{
	range= prompt("please enter the end of the range");
	console.log(range);
}
var a=parseInt(i);
var b=parseInt(range);
while(a<b)
{
	sum +=a;
	a++;
	console.log("the step by step sum is \t" + sum);
}


// THE TRADITIONAL WAY

var arr=[1,2,3]
for(var i=0;i<arr.length;i++){
	var a=arr[i];
	console.log("the array element \t"+ a);
}
console.log(arr);

//HIGH ORDER FUNCTIONS

function forEach(a,task){
	for( var i=0;i<a.length;i++)
		task(a[i]);
}
forEach(["1","2","3"],console.log);

// USING FUNCTION INSTEAD OF ACTION
var a=[1,2,3,4,5,6],total=0;
forEach (a , function(total) {
	total +=a;
});
console.log(total);


function gT(n){
	return function(m){
		return m>n;
	};
}
var gT5=gT(5);
console.log(gT5(11));

// functions that change other functions

function noi(f){
	return function(arg){
		console.log("calling with",arg);
        var val=f(arg);
        console.log("called with",arg,"-got",val);
        return val;
	};
}
noi(Boolean)(1);
var a=JSON.stringify({
	"name": "rama",
	"sex": "m",
	"born":"1958",
	"father":"das"
},{
	"name": "shama",
	"sex": "f",
	"born":"1998",
	"father":"shiv sunder"
},{
	"name": "bajrangi",
	"sex": "m",
	"born":"1985",
	"father":"anjanaa"
});
console.log(a);
console.log(JSON.parse(a).born);

//to be continued