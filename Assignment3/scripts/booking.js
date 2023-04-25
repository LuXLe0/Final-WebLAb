/********* create variables *********/
let costPerDay = 40;
let numDaysSelected = 0;
const daysButtons = document.querySelectorAll(".day-selector li"); // update the selector to match the HTML
const clearDaysButton = document.getElementById("clear-button"); // update the ID to match the HTML
const submitButton = document.getElementById("submit-button"); //new variable for the submit button

/********* color change days of week *********/
daysButtons.forEach(button => {
button.addEventListener("click", () => {
if (!button.classList.contains("clicked")) {
button.classList.add("clicked");
button.classList.add("selected"); //add the "selected" class
button.style.backgroundColor = submitButton.style.backgroundColor; //change the background color to match the submit button
numDaysSelected++;
} else {
button.classList.remove("clicked");
button.classList.remove("selected"); //remove the "selected" class
button.style.backgroundColor = ""; //reset the background color
numDaysSelected--;
}
const calculatedCost = document.getElementById("calculated-cost");
calculatedCost.innerHTML = $;{costPerDay * numDaysSelected};
});
});

/********* clear days *********/
clearDaysButton.addEventListener("click", () => {
daysButtons.forEach(button => {
button.classList.remove("clicked");
button.classList.remove("selected"); //remove the "selected" class
button.style.backgroundColor = ""; //reset the background color
});
numDaysSelected = 0;
const calculatedCost = document.getElementById("calculated-cost");
calculatedCost.innerHTML = "0";
});

/********* change rate *********/
const halfButton = document.getElementById("half");
const fullButton = document.getElementById("full");

halfButton.addEventListener("click", () => {
costPerDay = 20;
halfButton.classList.add("clicked");
fullButton.classList.remove("clicked");
const calculatedCost = document.getElementById("calculated-cost");
calculatedCost.innerHTML = $;{costPerDay * numDaysSelected};
});

fullButton.addEventListener("click", () => {
costPerDay = 40;
fullButton.classList.add("clicked");
halfButton.classList.remove("clicked");
const calculatedCost = document.getElementById("calculated-cost");
calculatedCost.innerHTML = $;{costPerDay * numDaysSelected};
});

/********* highlight selected days *********/
//when the submit button is clicked, remove the "clicked" class from all day buttons and add the "selected" class instead
submitButton.addEventListener("click", () => {
daysButtons.forEach(button => {
button.classList.remove("clicked");
button.classList.add("selected");
button.style.backgroundColor = submitButton.style.backgroundColor;
});
});

/********* calculate *********/
const calculatedCost = document.getElementById("calculated-cost");
calculatedCost.innerHTML = "0";