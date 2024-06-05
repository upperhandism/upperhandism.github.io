document.addEventListener('DOMContentLoaded', function () {
    // Add to cart button event listeners
    const buttons = document.querySelectorAll('button:not(#dark-mode-toggle)');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Added to cart!');
        });
    });

    // Dark mode toggle button event listener
    document.getElementById('dark-mode-toggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});
