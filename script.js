// Dark Mode Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
    // Toggle dark mode class on the body element
    document.body.classList.toggle('dark-mode');
    
    // Change the theme toggle button's icon depending on the mode
    const currentTheme = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
    document.getElementById('theme-toggle').textContent = currentTheme;
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents the form from submitting normally

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && message) {
        // Simulate sending the form data (you could send it to a server here)
        document.getElementById('form-status').textContent = 'Thank you for your message! I will get back to you soon.';
        document.getElementById('form-status').style.color = 'green';
        
        // Clear the form fields after submission
        document.getElementById('contact-form').reset();
    } else {
        // Show an error message if any fields are missing
        document.getElementById('form-status').textContent = 'Please fill in all the fields.';
        document.getElementById('form-status').style.color = 'red';
    }
});
