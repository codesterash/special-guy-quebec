const express = require('express')
const app = express()
const PORT = process.env.port || 3000;

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    //res.send('Hello World')
    res.render('index', {
        someVar : "hello from node, express, and ejs, nodemon here too.."
    })
})
app.listen(PORT, () => {
    console.log(`Server is running and listening on port ${PORT}`);
})


