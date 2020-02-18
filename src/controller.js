//const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
 
//const app = express();
 
//app.use(bodyParser.urlencoded({ extended: false }));

const recipeSearch = (request, response) => {
    
    const query = request.body.query || "salad";
    const recipeAppID = process.env.recipeAppID || "6dc6b63b";
    const recipeAppKey = process.env.recipeAppKey || "e359861cdc62934bf3ce771538f675f2";
    const url = `https://api.edamam.com/search?q=${query}&app_id=${recipeAppID}&app_key=${recipeAppKey}`;
    
    fetch(url)
        .then(res => res.json())
        .then(res => {
            response.status(200).json(res);
        })
        .catch(res => {
            response.status(404).json(res.json());
        });
}

//app.post('/search', recipeSearch);
//app.listen(8080, () => console.log(`Started server at http://localhost:8080!`));

module.exports = {
    recipeSearch
};