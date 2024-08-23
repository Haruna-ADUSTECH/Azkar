// Function to update the counter value
function updateCounter(button) {
    let count = parseInt(button.getAttribute("data-count"));
    count++;
    button.setAttribute("data-count", count);
    button.innerText = count;
}

// Function to reset the counter value
function resetCounter(button) {
    let counterButton = button.previousElementSibling;
    counterButton.setAttribute("data-count", "0");
    counterButton.innerText = "0";
}

// Add event listeners to counter and reset buttons
document.querySelectorAll(".counter").forEach(button => {
    button.addEventListener("click", function () {
        updateCounter(button);
    });
});

document.querySelectorAll(".reset-btn").forEach(button => {
    button.addEventListener("click", function () {
        resetCounter(button);
    });
});

// Toggle between Morning and Evening Azkar
function toggleAzkar(showMorning) {
    const morningAzkar = document.getElementById("morning-azkar");
    const eveningAzkar = document.getElementById("evening-azkar");

    if (showMorning) {
        morningAzkar.style.display = "block";
        eveningAzkar.style.display = "none";
    } else {
        morningAzkar.style.display = "none";
        eveningAzkar.style.display = "block";
    }
}

// Add event listeners for Morning and Evening buttons
document.getElementById("morning-btn").addEventListener("click", function () {
    toggleAzkar(true);
});

document.getElementById("evening-btn").addEventListener("click", function () {
    toggleAzkar(false);
});

// Initialize to show Morning Azkar by default
toggleAzkar(true);
