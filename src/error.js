const path = require('path');

exports.client = (req, res) =>{
    res.status(404)
    res.sendFile(path.join(__dirname, '..','public','404.html'));
}

exports.server = (err, req, res, next) =>{
    res.status(500)
    res.sendFile(path.join(__dirname,'..','public','500.html'))
} 