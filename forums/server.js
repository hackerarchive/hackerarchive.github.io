const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const PUBLICS_DIR = path.join(__dirname, 'PUBLICS');

if (!fs.existsSync(PUBLICS_DIR)){
    fs.mkdirSync(PUBLICS_DIR);
}

app.use(bodyParser.json());
app.use(express.static('public'));

// Dodawanie postu
app.post('/add-post', (req, res) => {
    const { nick, post } = req.body;
    if (!nick || !post) return res.status(400).send('Brak nicku lub posta');

    const timestamp = Date.now();
    const filename = `${PUBLICS_DIR}/${timestamp}.json`;
    fs.writeFileSync(filename, JSON.stringify({ nick, post, timestamp }, null, 2));

    res.send({ success: true });
});

// Pobieranie wszystkich postów
app.get('/posts', (req, res) => {
    const files = fs.readdirSync(PUBLICS_DIR);
    const posts = files.map(file => {
        const content = fs.readFileSync(path.join(PUBLICS_DIR, file));
        return JSON.parse(content);
    });

    res.send(posts.sort((a,b) => b.timestamp - a.timestamp));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
