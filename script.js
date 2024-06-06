// Toggle dark mode
document.getElementById('dark-mode-checkbox').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    document.getElementById('dark-mode-checkbox').checked = true;
}

// Settings panel functionality
const settingsButton = document.querySelector('.settings-button');
const settingsPanel = document.querySelector('.settings-panel');

settingsButton.addEventListener('click', () => {
    settingsPanel.style.display = settingsPanel.style.display === 'none' ? 'block' : 'none';
});

// Switch between login and signup forms
document.getElementById('show-signup').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

// Handle login form submission
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implement login logic here
    alert('Login form submitted');
});

// Handle signup form submission
document.getElementById('signup').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implement signup logic here
    alert('Signup form submitted');
});
