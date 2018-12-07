const app = require('express')();

const port = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.send('Nothing here');
});

app.post('/login', (req, res) => {
    console.log('Ayy I catched the post on \'/login\' ');
});

app.listen(port, (req, res) => {
    console.log(`Listening on localhost:${port}`);  
});