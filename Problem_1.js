var number = 0;

var multiple = [];


while(number < 1000){
	if(number % 3 === 0 || number % 5 === 0){
		multiple.push(number);
	} number ++;
}

var sum = multiple.reduce(function(a, b){return a + b; }, 0);

console.log(sum);
