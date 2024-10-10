//aler("Žiju");
//confirm("Je ti 18?");
//prompt("Zadej tvůj věk:");

console.log("print toto je ");

var a = 10;
let b = "text";
const C = "KONSTANTA";

console.log("promena  a: ",a);

if (a == 10){
console.log( "jsem v ife")

}

a = "20";
b= "TEXT2";


a= 20;
a++;

console.log(a,b,C);

if(a > 10) {
	console.log("IF:");
}	else if (a == 21) {
		console.log("SEM v else IF:");
}	else {
	console.log("jsem v else");
}


var test = (a == 21) ? "Plati" : "Neplati";
console.log(test);

var test = (a === 21) ? "Plati" : "Neplati";
console.log(test);

console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);

var test = 2

test >>> 1

console.log(test)

var name = prompt("Zadej Jméno: ");

switch (name) {
case "admin":
	console.log("napsal jsi admin");
case "eva":
	console.log("napsal jsi eva");
case "karel":
	console.log("napsal jsi karel");

}


while(true){
	console.log("jsme ve while");
		break;
}
do {
	console.log("stejne se spustim");
} while (false)


for (i = 1; i < 5; i++){
	console.log(i);
	var var_a = 10;
	let let_a = 10;
console.log("let uvnitr:", let_a);
}

console.log("var:", var_a);
console.log("let:", let_a);
