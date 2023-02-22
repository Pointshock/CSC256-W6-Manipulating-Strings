// Created by Chris Tomaskovic for CSC256 at UAT
// JavaScript for the main page

// Array of Animals
var arrAnimals = [];

// Global Variables
var strAnimal;
var easterEgg = false;

// Function for entering and displaying animals
function enterAnimals() {
    // For loop that asks user for 5 animals
    for (var i = 0; i < 5; i++) {
        strAnimal = prompt("Enter an animal: ", "");
        // If statement that checks for easter egg
        if (strAnimal == "penguin" || strAnimal == "Penguin") {
            easterEgg = true;
        }
        arrAnimals.push(strAnimal);
    }

    // Sorts the array
    arrAnimals.sort();

    // For loop that displays the array
    for (var i = 0; i < arrAnimals.length; i++) {
        document.getElementById("test").innerHTML += arrAnimals[i] + "<br>";
    }
}

// Create a function that clears the array
function clearArray() {
    document.getElementById("test").innerHTML = "";
}

// Function for penguin picture easter egg
// If the user enters "penguin" or "Penguin" as an animal, a penguin picture will appear
// Both "penguin" and "Penguin" will work ensuring a better user experience
function penguinEgg() {
    document.getElementById("penguin").innerHTML = "";
    if (easterEgg == true) {
        //document.getElementById("penguin").innerHTML = "You found the secret penguin!";
        document.getElementById("penguin").innerHTML = "<img src='penguin.jpg' alt='penguin' width='300' height='300' />";
    }
}