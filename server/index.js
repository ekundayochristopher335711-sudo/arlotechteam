const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const DATA_DIR = path.join(__dirname, '..', 'data');
const DATA_FILE = path.join(DATA_DIR, 'briefs.json');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, '[]');

app.post('/submit-brief', (req, res) => {
  try {
    const payload = req.body || {};
    const list = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')) || [];
    list.push({ receivedAt: new Date().toISOString(), payload });
    fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2));
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false });
  }
});

app.get('/health', (req, res) => res.json({ ok: true }));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Brief capture server listening on ${port}`));
