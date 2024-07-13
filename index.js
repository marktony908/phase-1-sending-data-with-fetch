// Add your code here
// index.js

function submitData(name, email) {
    // Construct the configuration object for the fetch request
    const formData = {
        name: name,
        email: email
    };

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    // Perform the fetch request
    return fetch("http://localhost:3000/users", configurationObject)
        .then(response => response.json())
        .then(object => {
            // Append the new user's id to the DOM
            const messageDiv = document.getElementById("message");
            messageDiv.innerHTML = `User ID: ${object.id}`;
        })
        .catch(error => {
            // Handle any errors that occur during the fetch
            const messageDiv = document.getElementById("message");
            messageDiv.innerHTML = `Error: ${error.message}`;
        });
}

// Form submission handler
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    submitData(name, email);
});

// Call the function directly with your name and email
submitData('Anthony', 'kipkoechtony510@gmail.com');
