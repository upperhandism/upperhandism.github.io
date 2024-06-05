document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('main').classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelector('nav ul').classList.toggle('dark-mode');
    document.querySelectorAll('nav ul li a').forEach(function(a) {
        a.classList.toggle('dark-mode');
    });
});

const darkModeStyles = `
    body.dark-mode {
        background-color: #121212;
        color: #ffffff;
    }
    header.dark-mode {
        background-color: #1e1e1e;
    }
    footer.dark-mode {
        background-color: #1e1e1e;
    }
    main.dark-mode {
        background-color: #121212;
    }
    nav ul li a.dark-mode {
        color: #ffffff;
    }
    button.dark-mode {
        background-color: #ff5722;
        color: #ffffff;
    }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = darkModeStyles;
document.head.appendChild(styleSheet);
