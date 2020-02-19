const fetch = require('node-fetch');
require('dotenv').config();

const apiRequest = (query, response) => {
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

const recipeSearch = (request, response) => {
    apiRequest(request.body.query, response);
}

const randomSearch = (request, response) => {
    const list = ["meat", "salad", "rice"];
    const word = (Math.random() * list.length) |0;
    apiRequest(list[word], response);
}

module.exports = {
    recipeSearch,
    randomSearch,
};