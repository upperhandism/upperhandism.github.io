// Settings panel functionality
const settingsButton = document.querySelector('.settings-button');
const settingsPanel = document.querySelector('.settings-panel');

settingsButton.addEventListener('click', () => {
    settingsPanel.style.display = settingsPanel.style.display === 'none' ? 'block' : 'none';
});
