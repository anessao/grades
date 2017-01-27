// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var a = [];
var b = [];
var c = [];
var d = [];
var f = [];

for (var i = 0; i < scores.length; i++) {
	if (scores[i] < 61) {
		f.push(scores[i]);
	} else if (scores[i] > 60 && scores[i] < 71) {
		d.push(scores[i]);
	} else if (scores[i] > 70 && scores[i] < 81) {
		c.push(scores[i]);
	} else if (scores[i] > 80 && scores[i] < 91) {
		b.push(scores[i]);
	} else {
		a.push(scores[i]);
	}
}

// How many of each grade??

console.log("F: ", f.length);
console.log("D: ", d.length);
console.log("C: ", c.length);
console.log("B: ", b.length);
console.log("A: ", a.length);

// What is the lowest grade?
var scoresSort = scores.sort(function (a,b) {return a-b});
console.log("Lowest Number: ", scoresSort[0]);

// What is the highest grade?
var scoresReverse = scores.sort(function (a,b) {return a-b}).reverse();
console.log("Highest Number: ", scoresReverse[0]);





