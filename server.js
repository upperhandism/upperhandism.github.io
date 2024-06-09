const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const users = [];

app.post('/api/signup', (req, res) => {
    console.log('Received a signup request');
    const { name, email, password, confirmPassword } = req.body;

    console.log(`New signup attempt: { name: '${name}', email: '${email}', password: '${password}', confirmPassword: '${confirmPassword}' }`);

    if (password !== confirmPassword) {
        console.log('Error: Passwords do not match');
        return res.json({ success: false, message: 'Passwords do not match' });
    }

    const userExists = users.find(user => user.email === email);
    if (userExists) {
        console.log('Error: Email already in use');
        return res.json({ success: false, message: 'Email already in use' });
    }

    users.push({ name, email, password });

    console.log(`Signup successful for user: { name: '${name}', email: '${email}' }`);

    res.json({ success: true, message: 'User registered successfully!' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
