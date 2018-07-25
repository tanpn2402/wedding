const express = require('express'),
    app = express(),
    template = require('./build/template')
    path = require('path'),
    ssr = require('./build/server'),

    
// Serving static files
app.use('/assets/styles', express.static(path.resolve(__dirname, 'assets/styles')));
app.use('/assets/js', express.static(path.resolve(__dirname, 'assets/js')));
app.use('/assets/images', express.static(path.resolve(__dirname, 'assets/images')));


// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(80)

app.get('/', ( req , res) => {
    const { preloadedState, content}  = ssr()
    const response = template("Home", content, preloadedState)
    res.setHeader('Cache-Control', 'assets, max-age=604800')
    res.send(response);
});