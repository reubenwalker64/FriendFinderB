/* You should save your application's data inside of `app/data/friends.js` as an array of objects.
Each of these objects should roughly follow the format below.

```json
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
*/
var friends = [
  {
    name: "Alice Springs",
    photo: "../images/alice-springs.png",
    scores: [5,
		1,
		4,
		4,
		5,
		1,
		2,
		5,
		4,
		1]
  },

	{
    name: "Eric Red",
    photo: "../images/eric-red.png",
    scores: [1,
		5,
		2,
		2,
		1,
		5,
		4,
		1,
		2,
		1]
  },

	{
    name: "India Faux",
    photo: "../images/india-faux.png",
    scores: [2,
		4,
		1,
	  1,
		2,
		4,
		5,
		2,
		1,
		5]
  },

	{
    name: "Jean Iris",
    photo: "../images/jean-ris.png",
    scores: [4,
		2,
		5,
		5,
		4,
		2,
		1,
		4,
		5,
		2]
  },

	{
		name: "Jeff Painter",
		photo: "../images/jeff-painter.png",
		scores: [2,
		4,
		1,
		1,
		2,
		2,
		1,
		4,
		5,
		2]
	},

	{
    name: "MC Jones",
    photo: "../images/mc-jones.png",
    scores: [4,
		2,
		2,
		2,
		4,
		2,
		4,
		4,
		2,
		2]
  },
];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
