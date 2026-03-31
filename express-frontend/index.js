const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;
const FLASK_URL = process.env.FLASK_BACKEND_URL || 'http://localhost:5000';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('${FLASK_URL}/api/data');
        res.render('index', { items: response.data.items, error: null });
    } catch (err) {
        res.render('index', { items: [], error: 'Cannot reach backend: ' + err.message });
    }
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, '0.0.0.0', () => console.log(Express running on port ${PORT}));
