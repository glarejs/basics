//all concepts learned from chapter number 2
console.log("Lets start from the beginning");
alert("It is used to provide user with a alert message");
prompt("it is used to get input from the user","");
confirm("it is used as a confimation alert");
console.log("console.log -- It is used as a print statement");
console.log("Math.max function is used to print the maximum number of all the numbers given \n ")
console.log(Math.max(5,7,10,99,87,55,46));
console.log("Math.min function is used to print the minimum number of all the numbers given \n ")
console.log(Math.min(5,7,10,99,87,55,46));
console.log("the concept of conditional execution starts from here")




var a = prompt("please enter a valid number")
if(! isNaN(a))
	console.log("you have entered a number");
else
	console.log("you have entered NaN");


console.log("printing the complete table of 2 using while loop \n")
var b=0;
while(b<20)
{
	console.log(b);
	b=b+2;	
}
	
console.log("printing the odd numbers till 100 using for loop")
for(var i=1;i<100;i+=2)
{
	console.log("\n list of odd numbers are" + i);
}

// this is used for single line comments
/* this is
used for
multiple line comments */
do{

	console.log("enter a english alphabet")
	p = prompt("which alpahbet you want to enter","")
}while(p != "p")


switch(prompt("enter your mood",""))
{

	case "very good":
		console.log("its greaT !!!!!!!!!");
		break;
	case "good":
		console.log("goofy !!!!!!!!!");
		break;
    case "not bad":
		console.log("why dont you try chocolates!!!!!!!!!");
		break;


}