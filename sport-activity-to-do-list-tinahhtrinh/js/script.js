"use strict"

// Tager fat om feltet, og ikke indholdet
// Globale variabler, som henter DOM elementer og gemmer dem i nogle variabler
const userInput = document.getElementById("userInput");
const addActivityBtn = document.querySelector("#addActivityBtn");
const deleteLastActivityBtn = document.getElementById("deleteLastActivityBtn");
const sportsUL = document.getElementById("sports");





// Sæt en lytter på -> .addEventListener -> registrér clicks med "click" -> kald på en funktion
addActivityBtn.addEventListener("click", function() {
    // Definer hvad funktionen skal gøre
    addActivity();
});

function addActivity() {
    let userInputText = userInput.value.trim();

    if(userInputText !== "") {
        let newListItem = document.createElement('li');
        newListItem.innerText = userInputText;
        newListItem.className = 'menu-item';

        sportsUL.appendChild(newListItem);

        userInput.value = "";


    } else {
        alert("Please enter a sport activity");
    }
};

deleteLastActivityBtn.addEventListener("click", function() {
    //Definer hvad funktionen skal gøre
    deleteLastActivity();
});

function deleteLastActivity() {
    const lastActivity = sportsUL.lastElementChild;
    if (lastActivity) {
        sportsUL.removeChild(lastActivity);
    } else {
        alert("No activities to delete");
    }
}




// Tilføj event listener for mouseover event
addActivityBtn.addEventListener("mouseover", function() {
    // Når der er mouseover, ændre bacggrundsfarve
    addActivityBtn.style.backgroundColor = "lightgreen"; // Change background color to light green
});

// Tilføj event listener for mouseout event
addActivityBtn.addEventListener("mouseout", function() {
    // Når der er mouseout, ændre bacggrundsfarve
    addActivityBtn.style.backgroundColor = "lightblue"; // Change background color back to light blue
});
