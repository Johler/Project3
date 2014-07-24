//alert("JavaScript works!");
// Jessica Ohler
// SDI 1407
// Project 3

//Global Variables
var distanceFromParkMiles = 60,
	rideNames = ["The Raptor",
				"The Magnum",
				"The Mantis",
				"The Millennium Force",
				"The Corkscrew",
				"The Top Thrill Dragster"],
	minutesInLine = [25, 45, 30, 65, 20, 125]
;

//JSON Data Shows the family that is going to the amusement park, their age, and their favorite rides. 
var jsonData = {
	"familyMembers":
		[
			{
			"name" : "Albert",
			"age" : 50,
			"favoriteRide" : "The Raptor"
			},
			{
			"name" : "Claudia",
			"age" : 49,
			"favoriteRide" : "The Magnum"
			},
			{
			"name" : "Josh",
			"age" : 30,
			"favoriteRide" : "The Mantis"
			},
			{
			"name" : "Joie",
			"age" : 26,
			"favoriteRide" : "The Millennium Force"
			},
			{
			"name" : "Sam",
			"age" : 18,
			"favoriteRide" : "The Corkscrew"
			},
			{
			"name" : "Riley",
			"age" : 17,
			"favoriteRide" : "The Top Thrill Dragster"
			}
		]
};

var myJSON = function() {
	for (var key in jsonData.familyMembers){
		for (var newKey in jsonData.familyMembers[key]) {
			console.log(key + ":" + newKey + ":" + jsonData.familyMembers[key][newKey]);
		}
	};
};
myJSON();

//Driving to Cedar Point from home with the family. Using a while loop. Getting gas for the trip using Number Function.
	
while (distanceFromParkMiles > 0) {
		console.log("We are still " + distanceFromParkMiles + "miles from the park!");
		distanceFromParkMiles -=5; 
};
	
console.log ("We made it to the park. Yipee!");

//Gas used on the way there.

var getGas = function (cash){
	var pricePerGallon = 3,
	gasTankMax = 14,
	gasTankHoldsGallons;
	
	if (cash < pricePerGallon) {
		console.log("We need more money for gas!")
			if (gasTankHolds > gasTankMax) {
				console.log("Gas tank is full. Let's hit the road!");
			}
		} else {
		gasTankHoldsGallons = (cash / pricePerGallon);
		}
		return gasTankHoldsGallons;
};
var gasFilled = getGas(25)
console.log("We got " + gasFilled + " gallons in our tank.");

//Number Function with For Loop  Waitin
var waitingInLine = function (ride) {
	var rideNames = [ride],
		minutesThisLine = minutesInLine[rideNumber];
	console.log("At " + rideName + " we waited in line for " + minutesThisLine + " minutes.");
};
