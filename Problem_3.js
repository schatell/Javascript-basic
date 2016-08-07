var number = 600851475143;
var factors = [];
var largestFactor = [];
var division = 2;

while (division < number){
	if (number % division === 0) {
		factors.push(division);
		number = number/division;
	}else{
		division++;
	}
	}
largestFactor = division;

console.log("The largest factor is "+largestFactor);