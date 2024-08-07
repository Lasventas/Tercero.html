const express = require('express');
const app = express();
const port = 3000;

const products = [
    { id: 1, name: 'Sportswear 1', description: 'Comfortable sportswear', price: 29.99, image: 'image1.jpg' },
    { id: 2, name: 'Sportswear 2', description: 'High-quality sportswear', price: 39.99, image: 'image2.jpg' },
    { id: 3, name: 'Sportswear 3', description: 'Affordable sportswear', price: 19.99, image: 'image3.jpg' }
];

app.use(express.static('public'));

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
