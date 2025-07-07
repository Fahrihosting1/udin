const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Endpoint webhook untuk menerima data dari Saweria
app.post('/webhook-saweria', (req, res) => {
    const payload = req.body;

    // Proses payload dari Saweria
    console.log('Data diterima dari Saweria:', payload);

    // Contoh respons sukses
    res.status(200).send('Webhook diterima!');
});
 
// Jalankan server
app.listen(3000, () => {
    console.log('Webhook berjalan di port 3000');
});