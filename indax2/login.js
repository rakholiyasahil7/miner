document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username && password) {
        // Store user data in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password); // Note: Storing passwords in plain text is not secure

        // Display success message
        document.getElementById('message').textContent = 'Login successful!';
        document.getElementById('message').style.color = 'green';
    } else {
        // Display error message
        document.getElementById('message').textContent = 'Please enter both username and password.';
        document.getElementById('message').style.color = 'red';
    }
});
