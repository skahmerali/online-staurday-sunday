// var arraysPets = ["Lion", "cat", "dog", "horse", "rabbit"];
// console.log(arraysPets);

// arraysPets.shift();
// console.log(arraysPets);

// arraysPets.unshift("parrot", "sparow")
// console.log(arraysPets);
// arraysPets.splice(2, 3, "pig", "duck", "emu");
// console.log(arraysPets);

// var arraysHomePets = arraysPets.slice(3, 5);
// console.log(arraysHomePets);

// console.log(arraysPets);

let cleanestCities = ["Karachi", "Islamabad", "Faislabad", "Lahore", "Multan"];
let cityName = prompt("enter ur cleanest city name");
var isFound = false;
for (var i = 0; i < 1000; i++) {
    if (cleanestCities[i] === cityName) {
        alert("YES! your city is in the list");
        isFound = true;
    }
    // console.log(i)
}
// if (isFound === false) {
//     alert("NO! your city is not in the list");
// }
