document.addEventListener('DOMContentLoaded', function () {
    // Add to cart button event listeners
    const buttons = document.querySelectorAll('button:not(#dark-mode-toggle)');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Added to cart!');
        });
    });

    // Dark mode toggle button event listener
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
        });
    }
});