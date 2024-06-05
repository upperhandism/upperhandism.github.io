// Toggle dark mode
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Settings panel functionality
const settingsButton = document.createElement('button');
settingsButton.classList.add('settings-button');
settingsButton.textContent = '⚙';
document.body.appendChild(settingsButton);

const settingsPanel = document.createElement('div');
settingsPanel.classList.add('settings-panel');
settingsPanel.innerHTML = `
    <h3>Settings</h3>
    <label>
        <input type="checkbox" id="dark-mode-checkbox"> Dark Mode
    </label>
`;
document.body.appendChild(settingsPanel);

settingsButton.addEventListener('click', () => {
    settingsPanel.style.display = settingsPanel.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('dark-mode-checkbox').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Set initial state of dark mode checkbox
if (document.body.classList.contains('dark-mode')) {
    document.getElementById('dark-mode-checkbox').checked = true;
}
