'use strict';

// const selectedDiv = document.getElementById('main-btn');

// console.log(selectedDiv)

// const div = document.querySelector('#main-btn');

// div.addEventListener('click', () => {
//     console.log('button was clicked!')
// });

// const button = document.getElementById('main-btn');

// const whatIsTheId = (e) => {
//     return `The element ID is ${e.target.id}!`
// }

// button.addEventListener('click', whatIsTheId);

// // Creat a function that console logs "You clicked me!"
// div.addEventListener('click', () => {
//     console.log('You clicked me!')
// });

const otherBtn = document.querySelector('#main-btn');
// Add the click event listener on the button query selected you made earlier
const youClickedMe = () => {
    console.log("You clicked me!")
}
// Use the function that you created as the callback
otherBtn.addEventListener('click', youClickedMe)

