// Wait for the document to fully load before manipulating the DOM
document.addEventListener("DOMContentLoaded", function () {
    // Access the email and password input fields
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    // Access the form and add a submit event listener
    var form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the values entered by the user
        var emailValue = emailInput.value;
        var passwordValue = passwordInput.value;

        // Perform validation or further actions here
        // For example, you can check if the email and password are valid

        // Display a message (you can replace this with your actual logic)
        alert("Email: " + emailValue + "\nPassword: " + passwordValue);
    });

    // Access the checkbox for terms of service
    var checkbox = document.querySelector(".form-check-input");

    // Add a click event listener to the checkbox
    checkbox.addEventListener("click", function () {
        // Check if the checkbox is checked
        if (checkbox.checked) {
            // Do something when the checkbox is checked
            console.log("Checkbox is checked");
        } else {
            // Do something when the checkbox is unchecked
            console.log("Checkbox is unchecked");
        }
    });
});

// Create a <script> element to load FontAwesome icons from the official website
var script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/a076d05399.js';
script.crossOrigin = 'anonymous'; // Set crossOrigin attribute to 'anonymous' to avoid CORS issues

// Append the script element to the document's <head>
document.head.appendChild(script);
