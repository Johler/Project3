//alert("JavaScript works!");
// Jessica Ohler
// SDI 1407
// Project 3

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
			"favoriteRide" : "Top Thrill Dragster"
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