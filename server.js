//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/js17-ml-frontend'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/js17-ml-frontend/'}),
);

// Start the app by listening on the default Heroku port
//app.listen(process.env.PORT || 8080);
app.listen(3000);//porque el puerto de java es 8080
