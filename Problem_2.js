var x = 0;

var y = 1;

var resultat = 0;

var evenNumber = [];


while(y < 4000000){
	resultat = x + y;
	if (resultat % 2 === 0) {
		evenNumber.push(resultat);
	}
	x = y;
	y = resultat;
}

var sum = evenNumber.reduce(function(a, b){return a + b; }, 0);

console.log(sum);
