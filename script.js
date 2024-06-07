// Ensure the script is running
console.log("Script loaded");

// Toggle dark mode
const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
if (darkModeCheckbox) {
    darkModeCheckbox.addEventListener('change', function() {
        console.log("Dark mode toggled");
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });

    // Load dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        console.log("Dark mode preference loaded");
        document.body.classList.add('dark-mode');
        darkModeCheckbox.checked = true;
    }
}

// Settings panel functionality
const settingsButton = document.querySelector('.settings-button');
const settingsPanel = document.querySelector('.settings-panel');

if (settingsButton && settingsPanel) {
    settingsButton.addEventListener('click', () => {
        console.log("Settings button clicked");
        settingsPanel.style.display = settingsPanel.style.display === 'none' ? 'block' : 'none';
    });
} else {
    console.error("Settings button or panel not found");
}

// Switch between login and signup forms
const showSignupLink = document.getElementById('show-signup');
const showLoginLink = document.getElementById('show-login');

if (showSignupLink) {
    showSignupLink.addEventListener('click', function(event) {
        event.preventDefault();
        console.log("Signup link clicked");
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('signup-form').style.display = 'block';
    });
} else {
    console.error("Signup link not found");
}

if (showLoginLink) {
    showLoginLink.addEventListener('click', function(event) {
        event.preventDefault();
        console.log("Login link clicked");
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    });
} else {
    console.error("Login link not found");
}

// Handle login form submission
const loginForm = document.getElementById('login');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("Login form submitted");
        // Implement login logic here
        alert('Login form submitted');
    });
} else {
    console.error("Login form not found");
}

// Handle signup form submission
const signupForm = document.getElementById('signup');
if (signupForm) {
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("Signup form submitted");

        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Implement signup logic here
        alert('Signup form submitted');
    });
} else {
    console.error("Signup form not found");
}
