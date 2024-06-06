// Ensure the script is running
console.log("Script loaded");

// Toggle dark mode
document.getElementById('dark-mode-checkbox').addEventListener('change', function() {
    console.log("Dark mode toggled");
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    console.log("Dark mode preference loaded");
    document.body.classList.add('dark-mode');
    document.getElementById('dark-mode-checkbox').checked = true;
}

// Settings panel functionality
const settingsButton = document.querySelector('.settings-button');
const settingsPanel = document.querySelector('.settings-panel');

settingsButton.addEventListener('click', () => {
    console.log("Settings button clicked");
    settingsPanel.style.display = settingsPanel.style.display === 'none' ? 'block' : 'none';
});

// Switch between login and signup forms
document.getElementById('show-signup').addEventListener('click', function(event) {
    event.preventDefault();
    console.log("Signup link clicked");
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function(event) {
    event.preventDefault();
    console.log("Login link clicked");
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

// Handle login form submission
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Login form submitted");
    // Implement login logic here
    alert('Login form submitted');
});

// Handle signup form submission
document.getElementById('signup').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Signup form submitted");
    // Implement signup logic here
    alert('Signup form submitted');
});
