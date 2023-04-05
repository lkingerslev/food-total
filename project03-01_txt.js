/*    JavaScript 7th Edition
  Chapter 3
  Project 03-01

  Application to calculate total order cost
  Author: Landen Ingerslev
  Date:   4/5/2023

  Filename: project03-01.js
*/

let menuItems = document.getElementsByClassName("menuItems");

for(let i=0;i<menuItems.length;i++){
  
}

// Function to display a numeric value as a text string in the format $##.## 
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}