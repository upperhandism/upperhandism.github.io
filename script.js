document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelector('main').classList.toggle('dark-mode');
    document.querySelectorAll('section').forEach(section => {
        section.classList.toggle('dark-mode');
    });
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.toggle('dark-mode');
    });
    document.querySelectorAll('button').forEach(button => {
        button.classList.toggle('dark-mode');
    });
});

document.getElementById('track-order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const orderId = document.getElementById('order-id').value;
    // Here you would typically make an AJAX request to your server to get the order status
    // For this example, we'll just display a placeholder message
    const orderStatusDiv = document.getElementById('order-status');
    orderStatusDiv.textContent = `Order status for ${orderId}: Processing`;
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
    body.dark-mode main {
        background-color: #121212;
    }
    body.dark-mode #home, body.dark-mode #shipping, body.dark-mode #track-order {
        background-color: #1e1e1e;
        color: #ffffff;
    }
    body.dark-mode nav ul li a {
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
