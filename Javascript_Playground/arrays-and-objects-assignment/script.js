// Task 1: Create and Use an Object
let book = {
	title: "To Kill a Mockingbird",
	author: "Harper Lee",
	pages: 281,
	isRead: false
};

console.log(book.title);
console.log(book.author);
console.log(book.pages);
console.log(book.isRead);


console.log(book["title"]);
console.log(book["author"]);
console.log(book["pages"]);
console.log(book["isRead"]);


book.isRead = true;
book.genre = "Fiction";

console.log(book);


// Task 2:  Create and Modify an Array of Objects
let movies = [
	{
		title: "Fast X",
		director: "Louis Leterrier",
		year: 2020
	},
	{
		title: "The Matrix",
		director: "Lana Wachowski, Lilly Wachowski",
		year: 1999
	},
	{
		title: "Interstellar",
		director: "Christopher Nolan",
		year: 2014
	}
];


console.log(movies[1].title);
movies[0].year = 2023;
console.log(movies);

// Task 3: Combine Objects and Arrays
let student = {
	name: "Steven Epis",
	age: 24,
	subjects: ["Capstone 2", "GIS", "Advance Database"]
};

console.log(student.subjects[0]);

student.subjects.push("Programming I");

console.log(student);

// Task 4: Challenge Task (Optional)
let recipe = {
	name: "Pasta Salad",
	ingredients: [
		{
			name: "Pasta",
			quantity: "200g",
			isVegetarian: true
		},
		{
			name: "Tomatoes",
			quantity: "2 cups",
			isVegetarian: true
		},
		{
			name: "Olive Oil",
			quantity: "2 tbsp",
			isVegetarian: true
		}
	],
	isVegetarian: true
};

recipe.ingredients.push({
	name: "Basil",
	quantity: "1/4 cup",
	isVegetarian: true
});

console.log(recipe.ingredients[1].name);
console.log(recipe);