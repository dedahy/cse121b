let fullName = "Dedahy Jean OMBILAHY";
let currentYear;
let profilePicture = "images/myself.jpg";

const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

let imageElement = document.querySelector('img');

let x = document.getElementById("img");

let food = ["Rice", "Corns", "Hamburger", "Pasta"];

nameElement.innerHTML = `<strong>${fullName}</strong>`;

imageElement.setAttribute('src', profilePicture);

imageElement.setAttribute('alt', "Profile image of [x]");

foodElement.innerHTML += `<br>${food}`;

food.push("Fishes", "Cassava", "Chicken")

foodElement.innerHTML += `<br>${food}`;

food.shift();
foodElement.innerHTML += `<br>${food}`;

food.pop();
foodElement.innerHTML += `<br>${food}`;


/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */




/* Step 3 - Element Variables */





/* Step 4 - Adding Content */






/* Step 5 - Array */






