/* Step 2 - Variables */

let fullName = "Dedahy Jean OMBILAHY";
let currentYear;
let profilePicture = "images/myself.jpg";
let x = document.querySelector("img");


const imageElement = document.querySelector('img');

const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

/* W02-Task - Profile Home Page */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

imageElement.setAttribute('src', profilePicture);

imageElement.setAttribute('alt', "Profile image of [x]");

/* Step 5 - Array */

let food = ["Rice", "Corns", "Hamburger", "Pasta"];

let nfood = ["Potato with meat"]
foodElement.innerHTML += `<br>${food}`;

/* Step 4 - Adding Content */

food.push(nfood);

foodElement.innerHTML += `<br>${food}`;

food.shift();
foodElement.innerHTML += `<br>${food}`;

food.pop();
foodElement.innerHTML += `<br>${food}<br><br><br>`;
//
/* Step 1 - Setup type tasks - no code required */

//
