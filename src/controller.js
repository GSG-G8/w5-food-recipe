const fetch = require('node-fetch');
require('dotenv').config();

const recipeSearch = (request, response) => {
    
    const query = request.body.query;
    const recipeAppID = process.env.recipeAppID;
    const recipeAppKey = process.env.recipeAppKey;
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

module.exports = {
    recipeSearch
};