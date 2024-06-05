document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('html').classList.toggle('dark-mode');
    document.querySelector('main').classList.toggle('dark-mode');
    document.querySelector('section').classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelectorAll('nav ul li a').forEach((el) => el.classList.toggle('dark-mode'));
});

const darkModeStyles = `
    body.dark-mode, html.dark-mode {
        background-color: #121212;
        color: #ffffff;
    }
    body.dark-mode header, html.dark-mode header {
        background-color: #1e1e1e;
    }
    body.dark-mode footer, html.dark-mode footer {
        background-color: #1e1e1e;
    }
    body.dark-mode main.dark-mode {
        background-color: #121212;
    }
    body.dark-mode section.dark-mode {
        background-color: #1e1e1e;
        color: #ffffff;
    }
    body.dark-mode nav ul li a.dark-mode {
        color: #ffffff;
    }
    body.dark-mode button {
        background-color: #ff5722;
        color: #ffffff;
    }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = darkModeStyles;
document.head.appendChild(styleSheet);
