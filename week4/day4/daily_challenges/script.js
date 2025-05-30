function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form values
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;

    // Create object with the form data
    const formData = {
        name: name,
        lastName: lastName
    };

    // Convert to JSON string
    const jsonString = JSON.stringify(formData);

    // Display on the DOM
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = jsonString;
}
