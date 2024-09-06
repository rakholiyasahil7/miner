document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Perform basic validation (can be expanded)
    if (name && email && message) {
        // Simulate form submission (e.g., send to a server or API)
        document.getElementById('responseMessage').innerText = 'Thank you for your message!';
        document.getElementById('contactForm').reset(); // Reset form fields
    } else {
        document.getElementById('responseMessage').innerText = 'Please fill out all fields.';
    }
});
