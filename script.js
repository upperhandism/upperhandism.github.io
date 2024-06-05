document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

const darkModeStyles = `
    body.dark-mode {
        background-color: #121212;
        color: #ffffff;
    }
    body.dark-mode header {
        background-color: #1e1e1e;
    }
    body.dark-mode footer {
        background-color: #1e1e1e;
    }
    body.dark-mode #home {
        background-color: #1e1e1e;
    }
    body.dark-mode nav ul li a {
        color: #ffffff;
    }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = darkModeStyles;
document.head.appendChild(styleSheet);
