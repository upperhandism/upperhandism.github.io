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
